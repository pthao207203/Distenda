import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerController } from "../../controllers/home.controller";
import {
  addNotification,
  getNotificationsByUser,
} from "../../services/notification.service";
import Cookies from "js-cookie";

const SideBar = ({ headerHeight }) => {
  let [data, setData] = useState({
    category: [],
    setting: [],
  });
  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái mở/đóng của Sidebar
  const [isDesktop, setIsDesktop] = useState(false); // Xác định xem có phải màn hình lớn hay không
  const location = useLocation(); // Lấy thông tin URL hiện tại
  const menuItems = [
    { name: "Khóa học của tôi", link: "/courses/CoursePurchased" },
    { name: "Đang học", link: "/courses/CourseStudying" },
    { name: "Đã hoàn thành", link: "/courses/CourseCompleted" },
    { name: "Tin nhắn", link: "/user/message"},
  ];

  // Kiểm tra kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Màn hình >= 1024px là desktop
    };

    handleResize(); // Kiểm tra kích thước ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Đóng Sidebar khi chuyển từ màn hình nhỏ sang lớn
  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false); // Đặt về mặc định là không mở khi ở desktop
    }
  }, [isDesktop]);

  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      // console.log("result", result)
      setData(result);
    }

    fetchData();
  }, []);
  const userToken = Cookies.get("user_token");
  useEffect(() => {
    const checkAndSendRankNotification = async () => {
      // Kiểm tra xem có userToken và UserMoney
      if (data?.setting?.user?.UserMoney && userToken) {
        let newMember;
        const money = data.setting.user.UserMoney;

        switch (true) {
          case money > 10000000:
            newMember = "Thành viên Vip";
            break;
          case money >= 5000000:
            newMember = "Thành viên vàng";
            break;
          case money >= 1000000:
            newMember = "Thành viên bạc";
            break;
          default:
            newMember = "Thành viên đồng";
        }

        if (newMember !== member) {
          setMember(newMember); // Cập nhật trạng thái thành viên mới

          try {
            // Gọi API để lấy thông báo của user thông qua userToken
            const notifications = await getNotificationsByUser(userToken);
            console.log("notifications", notifications);

            // Kiểm tra xem thông báo này đã được gửi chưa
            const hasAlreadySent = notifications.some(
              (noti) =>
                noti.NotificationMessage ===
                `Chúc mừng bạn hiện tại là ${newMember}!`
            );

            // Nếu chưa gửi thông báo này, thêm vào
            if (!hasAlreadySent) {
              const message = `Chúc mừng bạn hiện tại là ${newMember}!`;
              await addNotification({
                message,
                type: "rank_up", // Có thể dùng riêng để phân loại
                userToken, // Gửi userToken thay vì _id
              });
            }
          } catch (error) {
            console.error(
              "Không thể kiểm tra/gửi thông báo thăng hạng:",
              error
            );
          }
        }
      }
    };

    checkAndSendRankNotification();
  }, [data?.setting?.user?.UserMoney, member, userToken]); // Thêm userToken vào dependency array

  if (loading) {
    return <div>Đang tải...</div>;
  }
  // console.log("category ", data.category)
  // console.log("setting ", data.setting)
  return (
    <>
      {/* Lớp phủ toàn màn hình khi Sidebar mở */}
      {isOpen && !isDesktop && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)} // Đóng Sidebar khi nhấn vào overlay
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 text-white transition-all duration-300 ${
          isDesktop || isOpen ? `w-[220px] mt-[${headerHeight}px]` : "w-0 "
        } overflow-hidden`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)", // Nền trắng mờ
          backdropFilter: "blur(30px)", // Làm mờ nền
          top: `${headerHeight}px`,
        }} // Thay thế giá trị top bằng chiều cao header
      >
        {/* Thông tin người dùng */}
        <div className="flex gap-2 justify-center items-center px-[16px] w-full pt-[20px] pb-[20px]">
          <img
            loading="lazy"
            src={
              data.setting.user?.UserAvatar
                ? data.setting.user.UserAvatar
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/bbae0514e8058efa2ff3c88f32951fbd7beba3099187677c6ba1c2f96547ea3f?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
            }
            alt="User profile"
            className="object-cover shrink-0 self-stretch my-auto w-[64px] h-[62px] max-lg:w-[25px] max-lg:h-[25px] rounded-full aspect-[1.03] mr-[8px]"
          />
          <div className="flex flex-col flex-1 shrink self-stretch my-auto ">
            <div className="flex items-center text-[1.5rem] max-lg:text-[18px] font-semibold ">
              <div
                className="flex-1"
                style={{
                  maxWidth: "200px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {data?.setting?.user?.UserFullName
                  ? data.setting.user.UserFullName.split(" ").slice(-1)[0]
                  : ""}
              </div>
            </div>
            <div className="flex items-center max-lg:text-[16px] text-[1.125rem] font-medium">
              <div className="flex-1">{member}</div>
              {/* <div className="flex-1">{data.setting.user.createdAt}</div> */}
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col w-full text-[1.5rem] max-lg:text-[16px] font-light mx-[8px]">
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className={`flex gap-2 items-center py-[16px] pl-[16px] w-[95%] transition ${
                location.pathname === item.link ? "bg-black" : "bg-transparent"
              }`}
            >
              <div className="flex-1">{item.name}</div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Nút mở Sidebar */}
      {!isDesktop && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-5 left-2 z-50 p-2 bg-black text-white rounded-md max-md:top-5 max-md:left-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="20"
            viewBox="0 0 38 20"
            fill="none"
            className="max-lg:w-[30px] "
          >
            <path
              d="M1 1H37"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 10H37"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 19H37"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default SideBar;
