import React, { useState, useEffect } from "react";
import NotificationCard from "./NotificationCard";
import FilterCheckbox from "./FilterCheckbox";

// const defaultNotifications = [
//   {
//     title: "Chúc mừng bạn đã hoàn thành khóa học!",
//     date: "29/10/2024",
//     time: "21:30",
//     type: "course_completed"
//   },
//   {
//     title: "Chúc mừng! Bạn đã thăng hạng thành viên!",
//     date: "29/10/2024",
//     time: "20:23",
//     type: "membership_upgraded"
//   },
//   {
//     title: "Chúc mừng bạn đăng ký khóa học thành công!",
//     date: "29/10/2024",
//     time: "12:10",
//     type: "success_register"
//   },
//   {
//     title: "Khóa học của bạn sắp hết hạn, hãy nhanh chóng hoàn thành khóa học của bạn nhé!",
//     date: "29/10/2024",
//     time: "20:23",
//     type: "course_expiring"
//   }
// ];
const defaultNotifications = [];


const filters = ["Mới nhất", "Cũ nhất", "Đã đọc", "Chưa đọc"];

function NotificationsPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [dynamicNotifications, setDynamicNotifications] = useState([]);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Kiểm tra nếu là màn hình lớn
    };

    handleResize(); // Gọi ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  useEffect(() => {
    const savedNotis = JSON.parse(localStorage.getItem("user_notifications") || "[]");
    setDynamicNotifications(savedNotis);
  }, []);
  
  const allNotifications = [...dynamicNotifications, ...defaultNotifications];

  return (
      <main className="flex relative max-md:flex-col bg-white bg-opacity-10 backdrop-blur-[10px] pb-[129px] px-[33px] max-md:pb-24 max-md:max-w-full">
        
        <aside className="flex flex-col md:order-2 max-md:pr-0 w-[22%] pt-[34px] max-xl:ml-0 max-md:w-full min-h-screen max-md:min-h-[270px]">
          <div className="flex relative flex-col w-full font-medium max-md:mt-10">
            <div className="flex flex-col max-w-full tracking-wide">
              <div className="text-[#FFD75B]" style={{ fontFamily: 'Montserrat', fontSize: '24px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px', letterSpacing: '0.2px' }}>
                Phân loại
              </div>
              <div className="flex flex-col items-start mt-[16px] w-full" style={{ color: '#FFF', fontFamily: 'Montserrat', fontSize: '20px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px', letterSpacing: '0.2px' }}>
                {filters.map((filter, index) => (
                  <FilterCheckbox key={index} label={filter} />
                ))}
              </div>
            </div>

            <div className="flex items-center p-4 w-full mt-[33px] max-w-full mr-[66px] text-[20px] text-white text-opacity-80" style={{ fontFamily: 'Montserrat', fontSize: '20px', fontStyle: 'normal', fontWeight: '500', lineHeight: '20px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(100px)' }}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d1d79445e1400106200c68679712dae3dc06a8fbe1b50b91ebb9b2265382a90?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
                alt="search"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
              />
              <div className="gap-2.5 self-center w-full ml-[12px]">Tìm kiếm</div>
            </div>
          </div>
        </aside>

        <div className="flex flex-col md:order-1 w-[78%] max-md:w-full pr-[69px] max-md:pr-0 pt-[34px] max-md:ml-0">
            <div className="flex relative flex-col items-center w-full leading-none max-md:max-w-full">
              {allNotifications.map((notification, index) => (
                <div key={index} className="mb-[18px] w-full">
                  <NotificationCard {...notification} />
                </div>
              ))}
            </div>
        </div>
      </main>
  );
}

export default NotificationsPage;
