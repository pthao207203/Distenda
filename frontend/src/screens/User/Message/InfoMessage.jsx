import React from 'react';
import PopupImage from './PopupImage';
import './Message.css';

// Component để hiển thị hình ảnh với bóng đổ
function ImageWithShadow({ src, alt }) {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className="object-contain shrink-0 bg-none w-[60px]"
        />
    );
}


function InfoMessage({ onClose, avatar, userName, images, files }) {
    const [isOpen, setIsOpen] = React.useState(true);
    const [selectedImgSrc, setSelectedImgSrc] = React.useState(null);
    const [showImages, setShowImages] = React.useState(true);
    const [showFiles, setShowFiles] = React.useState(true);



    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
            onClose && onClose();
        }
    };
    const cornerImages = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/59b9819b2f8bcba5a532bac25a2a11282419b6aabd38e3a3bd70b97c7bbec430?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e", alt: "Top left decorative element" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/631194690e0d3936d5085113c8d86eb3414e79c243145ce47d95df9316e6e37e?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e", alt: "Top right decorative element" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/29ca412ec35dc720602a949c8cfc32eb796543795e2d5aa33c030019556c26ae?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9ce1976069f6b0e", alt: "Bottom left decorative element" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/37fc4790a46aa078c69f7f7e2592a3795899a59503c0ea27bb49607794680bdf?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e", alt: "Bottom right decorative element" },
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleClose}>

            <div className="flex flex-col justify-between max-w-fit bg-black max-h-fit ">

                <div className="relative flex flex-wrap justify-between bg-none">
                    {/* Hình ảnh góc trên bên trái */}
                    <ImageWithShadow src={cornerImages[0].src} alt={cornerImages[0].alt} />

                    {/* Hình ảnh góc trên bên phải và ảnh icon đóng */}
                    <button className="relative">
                        <ImageWithShadow src={cornerImages[1].src} alt={cornerImages[1].alt} />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bbfb14016c67d4716e0a6366eed76fac938e5a78f6cba88c3ed041abcc52d72?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
                            className="absolute top-[20px] right-[20px] w-[20px] h-[20px] object-contain z-0"
                            alt="Close icon"
                            onClick={handleClose} // Gọi hàm handleClose khi click vào icon
                        />
                    </button>
                </div>

                <div className="relative flex-col justify-start bg-none h-full p-[20px]">
                    <div className="flex flex-col justify-center items-center mb-[5px]">
                        <img
                            src={avatar || 'https://via.placeholder.com/150'}
                            alt="Avatar"
                             className="rounded-full max-w-[100px] max-h-[100px] aspect-[1.04] max-md:w-[60px]  max-md:h-[60px] object-cover"
                        />
                        <p className="text-white mt-2 text-lg max-md:text-[13px] font-semibold">{userName || 'Người dùng'}</p>

                    </div>

                    <div className="flex justify-between items-center cursor-pointer text-white max-md:text-[12px] mb-2"
                        onClick={() => setShowImages(!showImages)}>
                        <span>Hình ảnh</span>
                        <span className={`transition-transform ${showImages ? '' : 'rotate-180'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                <path d="M0.46967 0.96967C0.735936 0.703403 1.1526 0.679197 1.44621 0.897052L1.53033 0.96967L8 7.439L14.4697 0.96967C14.7359 0.703403 15.1526 0.679197 15.4462 0.897052L15.5303 0.96967C15.7966 1.23594 15.8208 1.6526 15.6029 1.94621L15.5303 2.03033L8.53033 9.03033C8.26406 9.2966 7.8474 9.3208 7.55379 9.10295L7.46967 9.03033L0.46967 2.03033C0.176777 1.73744 0.176777 1.26256 0.46967 0.96967Z" fill="white" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        {showImages && (
                            <div className="grid lg:grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-4 md:grid-cols-3 gap-2 overflow-y-auto overflow-hidden-scroll max-w-fit lg:max-h-[150px] max-md:h-[60px]">
                                {images && images.length > 0 ? (
                                    images.map((imgSrc, index) => (
                                        <img
                                            key={index}
                                            loading="lazy"
                                            src={imgSrc}
                                            alt={`Message Image ${index}`}
                                           className="object-cover w-[100px] h-[100px] max-md:w-[50px] max-md:h-[50px] rounded-md shadow-lg cursor-pointer"
                                            onClick={() => setSelectedImgSrc(imgSrc)}
                                        />
                                    ))
                                ) : (
                                    <p className="text-white text-center col-span-4"></p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between items-center cursor-pointer text-white max-md:text-[12px] mt-4 mb-2"
                        onClick={() => setShowFiles(!showFiles)}>
                        <span>File</span>
                        <span className={`transition-transform ${showFiles ? '' : 'rotate-180'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                <path d="M0.46967 0.96967C0.735936 0.703403 1.1526 0.679197 1.44621 0.897052L1.53033 0.96967L8 7.439L14.4697 0.96967C14.7359 0.703403 15.1526 0.679197 15.4462 0.897052L15.5303 0.96967C15.7966 1.23594 15.8208 1.6526 15.6029 1.94621L15.5303 2.03033L8.53033 9.03033C8.26406 9.2966 7.8474 9.3208 7.55379 9.10295L7.46967 9.03033L0.46967 2.03033C0.176777 1.73744 0.176777 1.26256 0.46967 0.96967Z" fill="white" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        {showFiles && (
                            <div className="flex flex-col gap-[10px] overflow-y-auto overflow-hidden-scroll w-full lg:max-h-[150px] max-lg:max-h-[100px] max-md:h-[60px]" >
                                {files.length > 0 ? (
                                    files.map((file, index) => (
                                        <a
                                            key={index}
                                            href={file.fileUrl}
                                            download
                                            className="text-black bg-gray-400 rounded-lg pt-[5px] pb-[5px] hover:underline"
                                        >
                                            <div className="flex justify-between px-[10px]">
                                                <div className="flex items-center gap-[5px] max-md:text-[12px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                                        <mask id="mask0_5477_2956" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="20">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0.0117188H17.0527V19.8652H0V0.0117188Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask0_5477_2956)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5731 1.51172C2.9161 1.51172 1.5401 2.85372 1.5011 4.50872V15.2037C1.4641 16.9167 2.8141 18.3277 4.5101 18.3657H12.5741C14.2431 18.2967 15.5651 16.9097 15.5531 15.2097V6.33972L10.9181 1.51172H4.5851H4.5731ZM4.5851 19.8657H4.4761C1.9541 19.8087 -0.0538966 17.7107 0.00110343 15.1877V4.49072C0.0591034 2.00972 2.1081 0.0117188 4.5711 0.0117188H4.5881H11.2381C11.4421 0.0117188 11.6371 0.0947188 11.7791 0.241719L16.8441 5.51872C16.9781 5.65772 17.0531 5.84472 17.0531 6.03772V15.2037C17.0711 17.7127 15.1171 19.7627 12.6041 19.8647L4.5851 19.8657Z" fill="black" />
                                                        </g>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2986 6.98424H13.5436C11.7136 6.97924 10.2256 5.48724 10.2256 3.65924V0.750244C10.2256 0.336244 10.5616 0.000244141 10.9756 0.000244141C11.3896 0.000244141 11.7256 0.336244 11.7256 0.750244V3.65924C11.7256 4.66324 12.5426 5.48124 13.5456 5.48424H16.2986C16.7126 5.48424 17.0486 5.82024 17.0486 6.23424C17.0486 6.64824 16.7126 6.98424 16.2986 6.98424Z" fill="black" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.7887 14.1084H5.38867C4.97467 14.1084 4.63867 13.7724 4.63867 13.3584C4.63867 12.9444 4.97467 12.6084 5.38867 12.6084H10.7887C11.2027 12.6084 11.5387 12.9444 11.5387 13.3584C11.5387 13.7724 11.2027 14.1084 10.7887 14.1084Z" fill="black" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.7437 10.3564H5.3877C4.9737 10.3564 4.6377 10.0204 4.6377 9.60645C4.6377 9.19245 4.9737 8.85645 5.3877 8.85645H8.7437C9.1577 8.85645 9.4937 9.19245 9.4937 9.60645C9.4937 10.0204 9.1577 10.3564 8.7437 10.3564Z" fill="black" />
                                                    </svg>
                                                    {file.fileName}
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 16L11.4697 16.5303L12 17.0607L12.5303 16.5303L12 16ZM12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L12.75 4ZM5.46967 10.5303L11.4697 16.5303L12.5303 15.4697L6.53033 9.46967L5.46967 10.5303ZM12.5303 16.5303L18.5303 10.5303L17.4697 9.46967L11.4697 15.4697L12.5303 16.5303ZM12.75 16L12.75 4L11.25 4L11.25 16L12.75 16Z" fill="#131313" />
                                                    <path d="M5 21H19" stroke="#131313" stroke-width="1.5" />
                                                </svg>
                                            </div>

                                        </a>
                                    ))
                                ) : (
                                    <p className="text-white text-center"></p>
                                )}
                            </div>
                        )}
                    </div>

                </div>



                <div className="flex flex-wrap justify-between">
                    <ImageWithShadow src={cornerImages[2].src} alt={cornerImages[2].alt} />
                    <ImageWithShadow src={cornerImages[3].src} alt={cornerImages[3].alt} />
                </div>
            </div>
            {selectedImgSrc && (
                <PopupImage
                    content={selectedImgSrc}
                    onClose={() => setSelectedImgSrc(null)}
                />
            )}
        </div>

    );
}

export default InfoMessage;