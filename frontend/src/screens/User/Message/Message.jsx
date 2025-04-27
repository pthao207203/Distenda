import React, { useState, useEffect, useRef } from 'react';
import Cookies from "js-cookie";
import './Message.css';
import uploadImage from '../../../components/UploadImage';
import uploadFile from '../../../components/UploadFile';
import PopupImage from './PopupImage';
import InfoMessage from './InfoMessage';
import {
    loadInstructors,
    loadMessages,
    sendMessage,
    updateMessageStatus,
    markAllMessagesFromInstructorAsRead,
} from '../../../controllers/message.controller';
import { getMessages } from '../../../services/message.service';
import { io } from "socket.io-client";
const socket = io('http://localhost:3001');



const Message = () => {
    const [instructors, setInstructors] = useState([]);
    const [selectedInstructor, setSelectedInstructor] = useState(null);
    const [message, setMessages] = useState([]);
    const [messagesByInstructor, setMessagesByInstructor] = useState({});
    const [newMessage, setNewMessage] = useState('');
    const token = Cookies.get('user_token');
    const userId = Cookies.get('user_id');
    const messagesEndRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImageUrl, setPreviewImageUrl] = useState(null);
    const uploadImagePreviewRef = useRef(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupImageSrc, setPopupImageSrc] = useState(null);
    const [isInfoMessagePopupOpen, setIsInfoMessagePopupOpen] = useState(false);
    const [infoImages, setInfoImages] = useState([]);  // State lưu danh sách ảnh
    const [infoFiles, setInfoFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);


    const openInfoMessagePopup = () => {
        if (message.length > 0) {
            const images = message
                .filter(msg => msg.image)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))   // Sắp xếp từ mới -> cũ
                .map(msg => msg.image);   // Lấy đường dẫn ảnh
            setInfoImages(images);
            const files = message
                .filter(msg => msg.file && msg.file.fileUrl)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))   // Mới -> cũ
                .map(msg => ({
                    fileName: msg.file.fileName,
                    fileUrl: msg.file.fileUrl
                }));
            setInfoFiles(files);
        }
        setIsInfoMessagePopupOpen(true);
    };


    const closeInfoMessagePopup = () => {
        setIsInfoMessagePopupOpen(false);
    };

    const openPopup = (imgSrc) => {
        setPopupImageSrc(imgSrc);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setPopupImageSrc(null);
    };


    // 🔁 Load instructors khi vừa mở component
    useEffect(() => {
        loadInstructors(token, (data) => setInstructors(data || []));
    }, [token]);

    // 🔁 Khi instructors đã có, load tất cả tin nhắn để hiển thị ở sidebar
    useEffect(() => {
        if (instructors.length > 0) {
            const fetchAllMessages = async () => {
                const groupedMessages = {};
                for (const instructor of instructors) {
                    const res = await loadMessages(instructor.instructorId, token);
                    if (res?.success) {
                        groupedMessages[instructor.instructorId] = res.data;
                    }
                }
                setMessagesByInstructor(groupedMessages);

                // 👉 Tự động chọn người nhắn gần nhất
                const latest = Object.entries(groupedMessages)
                    .flatMap(([instructorId, msgs]) =>
                        msgs.length > 0
                            ? [{ instructorId, latestTime: new Date(msgs[msgs.length - 1].createdAt) }]
                            : []
                    )
                    .sort((a, b) => b.latestTime - a.latestTime)[0];

                if (latest) {
                    // Nếu có tin nhắn mới, chọn giảng viên theo tin nhắn mới nhất
                    const matchedInstructor = instructors.find(ins => ins.instructorId === latest.instructorId);
                    if (matchedInstructor) {
                        setSelectedInstructor(matchedInstructor);
                        setMessages(groupedMessages[latest.instructorId]);
                        updateMessageStatus(latest.instructorId);
                    }
                } else {
                    // Nếu không có tin nhắn nào, chọn đại một giảng viên từ danh sách instructors
                    const firstInstructor = instructors[0]; // Chọn giảng viên đầu tiên trong danh sách
                    if (firstInstructor) {
                        setSelectedInstructor(firstInstructor);
                        setMessages(groupedMessages[firstInstructor.instructorId] || []); // Lấy tin nhắn của giảng viên đầu tiên
                    }
                }
            };
            fetchAllMessages();
        }
    }, [instructors, token]);

    // 📤 Gửi tin nhắn
    const handleSendMessage = async () => {
        if (!newMessage && !selectedImage && !selectedFile) return;
        if (!selectedInstructor) return;

        let uploadedImageUrl = null;
        let uploadedFileData = null;

        if (selectedImage) {
            uploadedImageUrl = await uploadImage(selectedImage);
        }
        if (selectedFile) {
            const fileUrl = await uploadFile(selectedFile);
            uploadedFileData = {
                fileName: selectedFile.name,
                fileUrl: fileUrl
            };
        }


        const tempMessage = {
            content: newMessage,
            image: uploadedImageUrl,
            file: uploadedFileData,
            createdAt: new Date().toISOString(),
            sender: { senderRole: 'user' },
            isRead: true
        };
        setMessages(prev => [...prev, tempMessage]);

        setMessagesByInstructor(prev => {
            const updated = { ...prev };
            if (!updated[selectedInstructor.instructorId]) updated[selectedInstructor.instructorId] = [];
            updated[selectedInstructor.instructorId] = [...updated[selectedInstructor.instructorId], tempMessage];
            return updated;
        });

        // 2️⃣ Gửi lên server
        const messageData = {
            receiverId: selectedInstructor.instructorId,
            receiverRole: 'admin',
            content: newMessage.trim() || '',  // Content có thể là chuỗi rỗng
            image: uploadedImageUrl || '', // Image có thể là null hoặc chuỗi rỗng
            file: uploadedFileData || {}
        };


        setNewMessage('');
        setSelectedImage(null);
        setSelectedFile(null);
        if (uploadImagePreviewRef.current) {
            uploadImagePreviewRef.current.src = "";
        }

        await sendMessage(messageData, (sentMsg) => {
            socket.emit('sendMessage', sentMsg);
            setMessages(prev => prev.map(msg =>
                msg === tempMessage ? sentMsg : msg
            ));

            setMessagesByInstructor(prev => {
                const updated = { ...prev };
                updated[selectedInstructor.instructorId] = updated[selectedInstructor.instructorId].map(msg =>
                    msg === tempMessage ? sentMsg : msg
                );
                return updated;
            });
        });
    };

    // 📂 Upload ảnh (chưa xử lý)
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImage(file);
            setPreviewImageUrl(imageURL);

            if (uploadImagePreviewRef.current) {
                uploadImagePreviewRef.current.src = imageURL;
            }
        }

    };
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    // ✅ Khi chọn 1 giáo viên
    const handleSelectInstructor = async (teacher) => {
        setSelectedInstructor(teacher);
        setMessages([]); // 👈 Xoá ngay toàn bộ tin nhắn cũ

        try {
            // 🟡 Chờ tin nhắn mới từ backend
            const res = await getMessages(teacher.instructorId, token);
            if (res.success) {
                setMessages(res.data); // 👉 Cập nhật tin nhắn với người mới
            }

            // ✅ Đánh dấu tin nhắn là đã đọc
            await updateMessageStatus(teacher.instructorId);

            // 🔄 Cập nhật lại messagesByInstructor
            setMessagesByInstructor(prev => {
                const updated = { ...prev };
                if (updated[teacher.instructorId]) {
                    updated[teacher.instructorId] = updated[teacher.instructorId].map(msg =>
                        msg.sender?.senderRole === 'admin' ? { ...msg, isRead: true } : msg
                    );
                }
                return updated;
            });
        } catch (error) {
            console.error("❌ Lỗi khi lấy tin nhắn:", error);
        }
    };
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [message]);

    useEffect(() => {
        socket.on('receiveMessage', (data) => {
            const senderId = data.sender?.userId;
            if (!senderId) return;  // Nếu không có senderId thì bỏ qua

            if (selectedInstructor && senderId === selectedInstructor.instructorId) {
                setMessages(prev => [...prev, data]);
            }
            if (data.type === 'image') {
                // Thêm vào tin nhắn với ảnh
                setMessages(prev => [...prev, data]);
            }


            setMessagesByInstructor(prev => {
                const updated = { ...prev };
                if (!updated[senderId]) updated[senderId] = [];
                updated[senderId] = [...updated[senderId], data];
                return updated;
            });
            console.log('📥 Received on client:', data);
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, [selectedInstructor]);


    return (
        <>
            {instructors.length > 0 ? (

                <main className="flex relative overflow-auto min-h-[calc(100vh-100px)] max-h-[calc(100vh-532px)] max-md:flex-col bg-none max-md:max-w-full">

                    <aside className="bg-black overflow-hidden-scroll flex-row md:order-2 min-w-fit px-[20px] py-[32px] max-md:px-[8px] max-md:py-[12px] max-md:w-full max-xl:ml-0 max-md:pr-0 max-md:min-h-[100px]">
                        <div className="flex flex-col text-[24px] font-medium mb-4 bg-bl text-white max-md:hidden">
                            <div className="p-[10px] bg-white bg-opacity-50 max-w-fit rounded-[8px] sticky top-0">
                                Hộp thư
                            </div>
                        </div>

                        <div className="max-md:flex max-md:overflow-y-auto  overflow-x-auto overflow-hidden-scroll  ">
                            <div className="max-md:flex text-white  flex-nowrap md:space-y-4 max-md:space-x-4 max-md:min-w-screen max-w-fit ">
                                {(instructors || []).map((teacher, i) => {
                                    const lastMessage = messagesByInstructor[teacher.instructorId]?.slice(-1)[0];

                                    return (

                                        <div
                                            key={teacher.instructorId || i}
                                            onClick={() => handleSelectInstructor(teacher)} // ✅ thay ở đây
                                            className="flex items-center max-w-fit "
                                        >

                                            <img
                                                src={teacher.instructorAvatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ebxW2tkf1OlwOYEF2K55p7OwwX9bhwsN6Q&s'}
                                                alt="avatar"
                                                className="h-[63px] max-w-[63px] min-w-[63px] mr-[20px] max-md:aspect-[1.25] rounded-full object-cover"
                                            />
                                            <div className="flex items-center justify-between space-y-0 max-md:hidden ">
                                                <div className="flex-col justify-between space-y-2 w-full ">
                                                    <div className="text-[20px] font-semibold">
                                                        {teacher.instructorName
                                                            ? teacher.instructorName.split(" ").slice(-2).join(" ")
                                                            : "Giáo viên"}
                                                    </div>
                                                    <div className="flex justify-between w-fit text-regular text-[18px]  text-white ">
                                                        {
                                                            messagesByInstructor[teacher.instructorId]?.length > 0
                                                                ? <>
                                                                    <div
                                                                        className="truncate leading-tight  "
                                                                        style={{
                                                                            textOverflow: 'ellipsis',
                                                                            whiteSpace: 'nowrap',
                                                                            width: '150px',
                                                                            overflow: 'hidden',
                                                                        }}
                                                                    >
                                                                        {lastMessage.image ? (
                                                                            lastMessage.sender.senderRole === 'admin'
                                                                                ? 'Bạn vừa nhận ảnh mới'
                                                                                : 'Bạn đã gửi 1 ảnh'
                                                                        ) : lastMessage.file && lastMessage.file.fileUrl ? (
                                                                            lastMessage.sender.senderRole === 'admin'
                                                                                ? 'Bạn vừa nhận file mới'
                                                                                : 'Bạn đã gửi 1 file'
                                                                        ) : (
                                                                            lastMessage.content
                                                                        )}
                                                                    </div>
                                                                    <div className="whitespace-nowrap leading-tight  xl:ml-[20px] md:ml-[10px]">
                                                                        {new Date(messagesByInstructor[teacher.instructorId].slice(-1)[0].createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                    </div>
                                                                </>
                                                                : <div className="truncate text-white  text-regular text-[18px]">Chat ngay với giảng viên</div>
                                                        }
                                                    </div>

                                                </div>

                                                {/* Dấu chấm nếu có tin chưa đọc */}
                                                {
                                                    messagesByInstructor[teacher.instructorId]?.some(msg => msg.isRead === false && msg.sender.senderRole === 'admin')
                                                        ? <div className="w-3 h-3 rounded-full bg-[#CFF500] ml-4 border border-black" />
                                                        : <div className="w-3 h-3 rounded-full bg-none ml-4 " style={{ visibility: 'hidden' }} />
                                                }
                                            </div>

                                            {/* Dành cho mobile */}
                                            <div className="md:hidden ml-auto max-md:mx-[-13px] max-md:mt-[35px]">
                                                {
                                                    messagesByInstructor[teacher.instructorId]?.some(msg => msg.isRead === false && msg.sender.senderRole === 'admin') &&
                                                    <div className="w-3 h-3 rounded-full bg-[#CFF500] border border-black" />
                                                }
                                            </div>
                                        </div>

                                    );
                                })}

                            </div>
                        </div>
                    </aside>

                    {/* Khung chat chính */}
                    <div className="flex flex-col w-full max-w-full bg-none text-white min-h-[calc(100vh-100px)] max-h-[calc(100vh-532px)]">
                        <div className="flex items-center justify-between bg-none px-[20px] py-[12px] text-[20px] font-semibold h-[87px]">
                            <div className="flex items-center">
                                <img
                                    src={selectedInstructor?.instructorAvatar || 'https://cdn.builder.io/api/v1/image/assets/TEMP/bbae0514e8058efa2ff3c88f32951fbd7beba3099187677c6ba1c2f96547ea3f?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e'}
                                    alt="avatar"
                                    className="h-[63px] w-[63px] rounded-full object-cover"
                                />
                                <div className="pl-[20px]">{selectedInstructor?.instructorName || ''}</div>
                            </div>
                            <button
                                onClick={openInfoMessagePopup}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.875C7.14125 1.875 2.375 6.64125 2.375 12.5C2.375 18.3587 7.14125 23.125 13 23.125C18.8587 23.125 23.625 18.3587 23.625 12.5C23.625 6.64125 18.8587 1.875 13 1.875ZM13 25C6.1075 25 0.5 19.3925 0.5 12.5C0.5 5.6075 6.1075 0 13 0C19.8925 0 25.5 5.6075 25.5 12.5C25.5 19.3925 19.8925 25 13 25Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9927 14.2161C12.4752 14.2161 12.0552 13.7961 12.0552 13.2786V7.75488C12.0552 7.23738 12.4752 6.81738 12.9927 6.81738C13.5102 6.81738 13.9302 7.23738 13.9302 7.75488V13.2786C13.9302 13.7961 13.5102 14.2161 12.9927 14.2161Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0048 18.4951C12.3135 18.4951 11.7485 17.9364 11.7485 17.2451C11.7485 16.5539 12.3023 15.9951 12.9923 15.9951H13.0048C13.696 15.9951 14.2548 16.5539 14.2548 17.2451C14.2548 17.9364 13.696 18.4951 13.0048 18.4951Z" fill="white" />
                                </svg>
                            </button>
                        </div>

                        {/* Nội dung tin nhắn */}
                        <div className="flex flex-col overflow-hidden-scroll overflow-y-auto justify-between justify-items-between bg-white min-h-[calc(100vh-187px)] max-h-[calc(100vh-532px)] bg-opacity-10 backdrop-blur-[20px] p-[20px] space-y-4 text-[20px] ">

                            <div className="flex flex-col overflow-hidden-scroll space-y-4 overflow-y-auto max-h-fit " >
                                <div className="flex-col justify-start items-start">
                                    <div
                                        className="bg-[url('/Image/BG.png')] object-contain w-full h-[300px] rounded-[10px] border-t border-black"
                                    />
                                    <div className="flex flex-col items-center justify-center w-full">
                                        <img
                                            src={selectedInstructor?.instructorAvatar || 'https://cdn.builder.io/api/v1/image/assets/TEMP/bbae0514e8058efa2ff3c88f32951fbd7beba3099187677c6ba1c2f96547ea3f?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e'}
                                            alt="avatar"
                                            className="mt-[-100px] h-[200px] w-[200px] rounded-full object-cover"
                                        />
                                        {/* {
                                    !selectedInstructor?
                                    <div className="text-center bg-white bg-opacity-10 p-[20px] text-white rounded-[8px] mt-4">
                                        Hãy đăng ký khóa học để nhắn tin với giảng viên.
                                    </div>
                                    : <div className="hidden"> </div>

                                } */}
                                    </div>

                                </div>


                                {message.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex space-x-3 ${msg.sender?.senderRole === "user" ? "justify-end" : ""}`}
                                    >
                                        <div
                                            className={`p-[12px] rounded-b-[8px] text-left ${msg.sender?.senderRole === "user"
                                                ? "bg-black text-white rounded-tl-[8px] justify-end items-end"
                                                : "bg-white bg-opacity-25 backdrop-blur-[60px] rounded-tr-[8px] justify-start items-start"}`}
                                            style={{ maxWidth: "80%", width: "fit-content", wordWrap: "anywhere" }}
                                        >
                                            <p className="text-xs">{new Date(msg.createdAt).toLocaleTimeString()}</p>

                                            {/* 1️⃣ Hiển thị File nếu có */}
                                            {msg.file && msg.file.fileUrl && (
                                                <a href={msg.file.fileUrl} download className="text-white hover:underline">
                                                    <div className="flex justify-between px-[10px]">
                                                        <div className="flex items-center gap-[5px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="white">
                                                                <mask id="mask0_5477_2956" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="20">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0.0117188H17.0527V19.8652H0V0.0117188Z" fill="white" />
                                                                </mask>
                                                                <g mask="url(#mask0_5477_2956)">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.5731 1.51172C2.9161 1.51172 1.5401 2.85372 1.5011 4.50872V15.2037C1.4641 16.9167 2.8141 18.3277 4.5101 18.3657H12.5741C14.2431 18.2967 15.5651 16.9097 15.5531 15.2097V6.33972L10.9181 1.51172H4.5851H4.5731ZM4.5851 19.8657H4.4761C1.9541 19.8087 -0.0538966 17.7107 0.00110343 15.1877V4.49072C0.0591034 2.00972 2.1081 0.0117188 4.5711 0.0117188H4.5881H11.2381C11.4421 0.0117188 11.6371 0.0947188 11.7791 0.241719L16.8441 5.51872C16.9781 5.65772 17.0531 5.84472 17.0531 6.03772V15.2037C17.0711 17.7127 15.1171 19.7627 12.6041 19.8647L4.5851 19.8657Z" />
                                                                </g>
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.2986 6.98424H13.5436C11.7136 6.97924 10.2256 5.48724 10.2256 3.65924V0.750244C10.2256 0.336244 10.5616 0.000244141 10.9756 0.000244141C11.3896 0.000244141 11.7256 0.336244 11.7256 0.750244V3.65924C11.7256 4.66324 12.5426 5.48124 13.5456 5.48424H16.2986C16.7126 5.48424 17.0486 5.82024 17.0486 6.23424C17.0486 6.64824 16.7126 6.98424 16.2986 6.98424Z" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.7887 14.1084H5.38867C4.97467 14.1084 4.63867 13.7724 4.63867 13.3584C4.63867 12.9444 4.97467 12.6084 5.38867 12.6084H10.7887C11.2027 12.6084 11.5387 12.9444 11.5387 13.3584C11.5387 13.7724 11.2027 14.1084 10.7887 14.1084Z" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.7437 10.3564H5.3877C4.9737 10.3564 4.6377 10.0204 4.6377 9.60645C4.6377 9.19245 4.9737 8.85645 5.3877 8.85645H8.7437C9.1577 8.85645 9.4937 9.19245 9.4937 9.60645C9.4937 10.0204 9.1577 10.3564 8.7437 10.3564Z" />
                                                            </svg>

                                                            {msg.file.fileName}
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                            <path d="M12 16L11.4697 16.5303L12 17.0607L12.5303 16.5303L12 16ZM12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L12.75 4ZM5.46967 10.5303L11.4697 16.5303L12.5303 15.4697L6.53033 9.46967L5.46967 10.5303ZM12.5303 16.5303L18.5303 10.5303L17.4697 9.46967L11.4697 15.4697L12.5303 16.5303ZM12.75 16L12.75 4L11.25 4L11.25 16L12.75 16Z" fill="white" />
                                                            <path d="M5 21H19" stroke="white" stroke-width="1.5" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            )}

                                            {/* 2️⃣ Hiển thị Ảnh nếu có */}
                                            {msg.image && (
                                                <div className="my-2">
                                                    <div onClick={() => openPopup(msg.image)}>
                                                        <img
                                                            src={msg.image}
                                                            alt="uploaded"
                                                            className="rounded"
                                                            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* 3️⃣ Hiển thị Nội dung text nếu có */}
                                            {msg.content && (
                                                <p className="mt-2">{msg.content}</p>
                                            )}
                                        </div>
                                        <div ref={messagesEndRef} />
                                    </div>
                                ))}
                            </div>

                            {/* Nhập tin nhắn */}
                            <div className="p-4 bg-white rounded-b-[8px] flex items-end space-y-2 space-x-2 w-full">
                                <div className="flex flex-col items-start w-full">
                                    <input
                                        type="text"
                                        className="flex-1 p-2 border-none outline-none bg-white text-black mb-[10px] w-full"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder="Nhập tin nhắn..."
                                    />
                                    <div className="flex items-start w-full">
                                        <input
                                            type="file"
                                            id="imageUpload"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            onChange={handleImageUpload}
                                        />
                                        <button
                                            onClick={() => document.getElementById('imageUpload').click()}
                                            className="bg-white p-2 rounded-full border-b border-t border-l border-r border-black mr-[5px]"

                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <mask
                                                    id="mask0_5128_19311"
                                                    style={{ maskType: "luminance" }}
                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="14"
                                                    height="14"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M0.333496 0.333496H13.6355V13.6361H0.333496V0.333496Z"
                                                        fill="white"
                                                    />
                                                </mask>
                                                <g mask="url(#mask0_5128_19311)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M4.10083 1.3335C2.42016 1.3335 1.3335 2.48616 1.3335 4.2695V9.70016C1.3335 11.4842 2.42016 12.6362 4.10083 12.6362H9.86483C11.5482 12.6362 12.6355 11.4842 12.6355 9.70016V4.2695C12.6368 3.36083 12.3595 2.60216 11.8342 2.07616C11.3488 1.59016 10.6695 1.3335 9.86816 1.3335H4.10083ZM9.86483 13.6362H4.10083C1.8475 13.6362 0.333496 12.0542 0.333496 9.70016V4.2695C0.333496 1.9155 1.8475 0.333496 4.10083 0.333496H9.86816C10.9402 0.333496 11.8648 0.691496 12.5415 1.3695C13.2488 2.0775 13.6368 3.1075 13.6355 4.27016V9.70016C13.6355 12.0542 12.1202 13.6362 9.86483 13.6362V13.6362Z"
                                                        fill="black"
                                                    />
                                                </g>
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.90407 4.12646C4.50141 4.12646 4.17407 4.4538 4.17407 4.85713C4.17407 5.2598 4.50141 5.58713 4.90474 5.58713C5.30741 5.58713 5.63541 5.2598 5.63541 4.8578C5.63474 4.45446 5.30674 4.12713 4.90407 4.12646M4.90474 6.58713C3.95007 6.58713 3.17407 5.81113 3.17407 4.85713C3.17407 3.90246 3.95007 3.12646 4.90474 3.12646C5.85874 3.12713 6.63474 3.90313 6.63541 4.85646V4.85713C6.63541 5.81113 5.85941 6.58713 4.90474 6.58713"
                                                    fill="black"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M1.49929 12.4078C1.41662 12.4078 1.33262 12.3872 1.25529 12.3438C1.01396 12.2085 0.929289 11.9038 1.06396 11.6632C1.10396 11.5912 2.06062 9.89984 3.11329 9.03318C3.94796 8.34651 4.84662 8.72384 5.57062 9.02851C5.99662 9.20784 6.39929 9.37718 6.78596 9.37718C7.14062 9.37718 7.58529 8.75051 7.97862 8.19784C8.52462 7.42718 9.14462 6.55518 10.0526 6.55518C11.4993 6.55518 12.748 7.84584 13.4193 8.53918L13.4966 8.61918C13.6886 8.81718 13.684 9.13384 13.486 9.32651C13.2893 9.51918 12.9726 9.51451 12.7793 9.31584L12.7006 9.23451C12.1326 8.64718 11.0753 7.55518 10.0526 7.55518C9.66062 7.55518 9.20062 8.20384 8.79329 8.77651C8.23462 9.56318 7.65662 10.3772 6.78596 10.3772C6.19729 10.3772 5.65796 10.1505 5.18262 9.94984C4.42662 9.63118 4.08396 9.52918 3.74862 9.80518C2.83929 10.5545 1.94462 12.1372 1.93596 12.1525C1.84462 12.3158 1.67462 12.4078 1.49929 12.4078"
                                                    fill="black"
                                                />
                                            </svg>
                                        </button>
                                        <input
                                            type="file"
                                            id="fileUpload"
                                            style={{ display: 'none' }}
                                            accept=".pdf,.doc,.docx,.zip"
                                            onChange={handleFileUpload}
                                        />
                                        <button onClick={() => document.getElementById('fileUpload').click()}
                                            className="bg-white p-2 rounded-full border-b border-t border-l border-r border-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 20" fill="black">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.57266 1.51172C2.91466 1.51172 1.53966 2.85372 1.50066 4.50872V15.3397C1.47166 16.9867 2.77866 18.3387 4.41366 18.3667L4.56066 18.3657H12.5727C14.2147 18.3477 15.5537 16.9907 15.5517 15.3407V6.34172L10.9177 1.51172H4.58466H4.57266ZM4.39966 19.8667C1.92666 19.8237 -0.0413401 17.7867 0.000659935 15.3267V4.49072C0.0576599 2.00972 2.10666 0.0117188 4.56966 0.0117188H4.58766H11.2367C11.4407 0.0117188 11.6357 0.0947188 11.7777 0.241719L16.8437 5.52072C16.9767 5.65972 17.0517 5.84672 17.0517 6.03972V15.3397C17.0557 17.8087 15.0497 19.8397 12.5807 19.8657L4.39966 19.8667Z" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2976 6.98449H13.5436C11.7126 6.97949 10.2246 5.48749 10.2246 3.65949V0.750488C10.2246 0.336488 10.5606 0.000488281 10.9746 0.000488281C11.3886 0.000488281 11.7246 0.336488 11.7246 0.750488V3.65949C11.7246 4.66349 12.5416 5.48149 13.5456 5.48449H16.2976C16.7116 5.48449 17.0476 5.82049 17.0476 6.23449C17.0476 6.64849 16.7116 6.98449 16.2976 6.98449Z" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7935 11.6643H5.89453C5.48053 11.6643 5.14453 11.3283 5.14453 10.9143C5.14453 10.5003 5.48053 10.1643 5.89453 10.1643H10.7935C11.2075 10.1643 11.5435 10.5003 11.5435 10.9143C11.5435 11.3283 11.2075 11.6643 10.7935 11.6643Z" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.34375 14.1144C7.92975 14.1144 7.59375 13.7784 7.59375 13.3644V8.46436C7.59375 8.05036 7.92975 7.71436 8.34375 7.71436C8.75775 7.71436 9.09375 8.05036 9.09375 8.46436V13.3644C9.09375 13.7784 8.75775 14.1144 8.34375 14.1144Z" />
                                            </svg>
                                        </button>

                                    </div>
                                    {previewImageUrl && (
                                        <div className="mt-2">
                                            <img
                                                src={previewImageUrl}
                                                alt="Preview"
                                                className="w-24 h-24 object-cover border rounded"
                                            />
                                        </div>
                                    )}

                                    {selectedFile && (
                                        <div className="mt-2 text-sm text-white bg-black p-[20px] rounded-lg">
                                            📄 {selectedFile.name}
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                        <path d="M38.5 13.6675V28.315C38.5 34.685 34.7025 38.4825 28.3325 38.4825H13.6675C7.2975 38.5 3.5 34.7025 3.5 28.3325V13.6675C3.5 7.2975 7.2975 3.5 13.6675 3.5H28.315C34.7025 3.5 38.5 7.2975 38.5 13.6675Z" fill="black" />
                                        <path d="M21.738 12.5352L27.6978 18.0963C28.1007 18.4722 28.1007 19.0944 27.6978 19.4704C27.295 19.8463 26.6281 19.8463 26.2253 19.4704L22.0437 15.5685V28.7778C22.0437 29.3093 21.5713 29.75 21.0017 29.75C20.4322 29.75 19.9598 29.3093 19.9598 28.7778V15.5685L15.7782 19.4704C15.3753 19.8463 14.7085 19.8463 14.3056 19.4704C14.0972 19.2759 14 19.0296 14 18.7833C14 18.537 14.1111 18.2778 14.3056 18.0963L20.2654 12.5352C20.4599 12.3537 20.7239 12.25 21.0017 12.25C21.2796 12.25 21.5435 12.3537 21.738 12.5352Z" fill="white" />
                                    </svg>
                                </button>

                            </div>

                            {isPopupOpen && (
                                <PopupImage onClose={closePopup} content={popupImageSrc} />
                            )}

                            {isInfoMessagePopupOpen && (
                                <InfoMessage
                                    onClose={closeInfoMessagePopup}
                                    avatar={selectedInstructor?.instructorAvatar}
                                    userName={selectedInstructor?.instructorName}
                                    images={infoImages}
                                    files={infoFiles}
                                />
                            )}



                        </div>


                    </div>

                </main>) : (
                <div className="flex items-center justify-center h-screen text-2xl text-white">
                    Hãy đăng ký khóa học để bắt đầu chat với giảng viên nhé!
                </div>
            )}
        </>
    );
};

export default Message;