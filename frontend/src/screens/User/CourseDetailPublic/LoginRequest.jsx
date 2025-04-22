import * as React from "react";
import { useNavigate } from "react-router-dom";

// Component hình ảnh với hiệu ứng shadow
function ImageWithShadow({ src, alt, className = "" }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain shrink-0 bg-none ${className}`}
    />
  );
}

export default function LoginRequest({ onClose }) {
  const [isOpen, setIsOpen] = React.useState(true); // Trạng thái popup
  const navigate = useNavigate();

  // Hàm đóng popup
  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose(); // Gọi hàm cha nếu có
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const cornerImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/59b9819b2f8bcba5a532bac25a2a11282419b6aabd38e3a3bd70b97c7bbec430?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
      alt: "Top left decorative element",
      className: "absolute top-0 left-0",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/631194690e0d3936d5085113c8d86eb3414e79c243145ce47d95df9316e6e37e?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
      alt: "Top right decorative element",
      className: "absolute top-0 right-0",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/29ca412ec35dc720602a949c8cfc32eb796543795e2d5aa33c030019556c26ae?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
      alt: "Bottom left decorative element",
      className: "absolute bottom-0 left-0",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/37fc4790a46aa078c69f7f7e2592a3795899a59503c0ea27bb49607794680bdf?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
      alt: "Bottom right decorative element",
      className: "absolute bottom-0 right-0",
    },
  ];

  // Nếu popup bị đóng, không render nữa
  if (!isOpen) return null;

  return (
    <main className="relative flex overflow-hidden flex-col justify-center items-center p-10 text-[1.5rem] font-medium leading-6 text-white bg-neutral-900 max-w-[607px] w-full min-h-[347px] max-md:p-5">
      {/* Hình ảnh trang trí góc */}
      {cornerImages.map((image, index) => (
        <ImageWithShadow
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.className}
        />
      ))}

      {/* Nút đóng popup */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bbfb14016c67d4716e0a6366eed76fac938e5a78f6cba88c3ed041abcc52d72?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
        className="absolute top-[20px] right-[20px] w-[20px] h-[20px] object-contain z-10 cursor-pointer"
        alt="Close icon"
        onClick={handleClose}
      />

      {/* Nội dung chính */}
      <p className="self-center text-center mt-[40px] max-md:mt-5 max-md:max-w-full">
        Bạn phải đăng nhập để có thể đăng ký khóa học này!
      </p>

      {/* Nút đăng nhập */}
      <button
        className="flex gap-3 justify-center items-center px-[12px] py-[20px] mt-11 w-4/5 max-w-full text-[1.25rem] font-medium bg-[#CFF500] text-black min-h-[60px] max-md:mt-10"
        onClick={handleLogin}
        tabIndex={0}
      >
        Đăng Nhập
      </button>

      {/* Phần đăng ký tài khoản */}
      <div className="flex gap-1 items-center max-w-full text-[1.125rem] w-[346px]">
        <p className="flex gap-3 items-center font-normal self-stretch my-auto">
          Bạn chưa có tài khoản?{" "}
        </p>
        <button
          className="flex gap-3 items-center self-stretch py-[20px] my-auto font-semibold text-[#CFF500]"
          onClick={() => navigate("/register")}
          tabIndex={0}
        >
          Đăng ký ngay
        </button>
      </div>
    </main>
  );
}
