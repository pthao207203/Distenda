import React, { useState, useEffect } from "react";
import NotificationCard from "./NotificationCard";
import FilterCheckbox from "./FilterCheckbox";


const notifications = [
  {
    title: "Chúc mừng bạn đã hoàn thành khóa học HTML cơ bản!",
    date: "29/10/2024",
    time: "21:30"
  },
  {
    title: "Bạn ơi! Ưu đãi của bạn sắp hết hạn!",
    date: "29/10/2024",
    time: "12:30"
  },
  {
    title: "Bạn đã thanh toán thành công cho khóa học HTML cơ bản!",
    date: "29/10/2024",
    time: "20:23"
  },
  {
    title: "Thời gian thanh toán của bạn sắp hết, hãy mau chóng thanh toán để bắt đầu học tập ngay nhé!",
    date: "29/10/2024",
    time: "12:10"
  },
  {
    title: "Cảm ơn bạn đã đánh giá khóa học, chúng tôi xin gửi tặng bạn mã giảm giá cho khóa học tiếp theo!",
    date: "29/10/2024",
    time: "15:13"
  },
  {
    title: "Chứng chỉ cho khóa học HTML của bạn đã được cấp!",
    date: "29/10/2024",
    time: "20:23"
  }
];

const filters = ["Mới nhất", "Cũ nhất", "Đã đọc", "Chưa đọc"];

function NotificationsPage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Kiểm tra nếu là màn hình lớn
    };

    handleResize(); // Gọi ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  return (
    <div className="flex flex-col w-screen min-h-screen bg-black ">

      <main
        className={`transition-all duration-300 ${
          isDesktop ? "ml-[292px]" : "ml-0"
        }`}
      >
      <div className="flex  relative max-md:flex-col  pb-[129px]  pl-[33px] max-md:pb-24 max-md:max-w-full">
      <aside className="flex flex-col bg-black lg:order-2 md:order-2 max-md: pr-[33px] w-[22%] pt-[34px] min-w-[200px] max-xl:ml-0 max-:w-full min-h-screen max-md:min-h-[270px]">
  <div className="flex relative flex-col w-full font-medium max-md:mt-10">
    <div className="flex flex-col max-w-full tracking-wide pr">
      <div
          className="text-[#FFD75B]"  // Màu sắc chữ #FFD75B
          style={{
              fontFamily: 'Montserrat',  // Thiết lập font Montserrat
              fontSize: '24px',         // Kích thước font 24px
              fontStyle: 'normal',      // Kiểu font bình thường
              fontWeight: '500',        // Độ đậm font 500
              lineHeight: '24px',       // Chiều cao dòng 24px (100%)
              letterSpacing: '0.2px'    // Khoảng cách giữa các ký tự
                }}>
        Phân loại
      </div>
      <div
          className="flex flex-col items-start mt-[16px] w-full"
          style={{
              color: '#FFF',                // Màu sắc chữ trắng
              fontFamily: 'Montserrat',      // Font chữ Montserrat
              fontSize: '20px',              // Kích thước font 20px
              fontStyle: 'normal',           // Kiểu font bình thường
              fontWeight: '500',             // Độ đậm font 500
              lineHeight: '24px',            // Chiều cao dòng 24px (120% của font-size 20px)
              letterSpacing: '0.2px'        // Khoảng cách giữa các ký tự
                }}>
        {filters.map((filter, index) => (
          <FilterCheckbox key={index} label={filter} />
        ))}
      </div>
    </div>
    <div 
    className="flex items-center p-[12px] w-full mt-[33px] max-w-[283px] mr-[66px] text-[20px] text-white text-opacity-80"
    style={{
        fontFamily: 'Montserrat',    // Thiết lập font Montserrat
        fontSize: '20px',           // Kích thước font 20px
        fontStyle: 'normal',        // Kiểu font bình thường
        fontWeight: '500',          // Độ đậm font
        lineHeight: '20px',         // Chiều cao dòng 20px
        background: 'rgba(255, 255, 255, 0.15)',  // Màu nền với độ trong suốt
        backdropFilter: 'blur(100px)', // Áp dụng hiệu ứng làm mờ nền phía sau
        }}>
    <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d1d79445e1400106200c68679712dae3dc06a8fbe1b50b91ebb9b2265382a90?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"/>
    <div className="gap-2.5 self-star w-full ml-[12px] ">Tìm kiếm</div>
    </div>
    </div>
</aside>

      <div className="flex md:order-1 max-md:flex-col w-full pr-[69px] max-md:pr-[33px] pt-[34px]">
        <div className="flex flex-col w-full max-md:ml-0 ">
          <div className="flex relative flex-col items-center w-full leading-none max-md:max-w-full">
            {notifications.map((notification, index) => (
              <div key={index} className={index >= 0 ? "mt-[18px] w-full" : ""}>
                <NotificationCard {...notification} />
              </div>
            ))}
          </div>
        </div>
        
      </div>
      </div>

    </main>
    </div>
  );
}

export default NotificationsPage;