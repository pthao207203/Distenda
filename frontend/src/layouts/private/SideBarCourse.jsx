import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerController } from "../../controllers/home.controller";
import {
  addNotification,
  getNotificationsByUser,
} from "../../services/notification.service";
import LessonList from "../../screens/PublishUser/CoursePractice/LessonList";
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
        <div className="flex flex-col overflow-y-auto h-[calc(100vh-200px)] w-[220px]">
          <LessonList {...data} />
        </div>
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
