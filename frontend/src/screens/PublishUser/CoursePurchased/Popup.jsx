import * as React from "react";

// Component để hiển thị hình ảnh với bóng đổ
function ImageWithShadow({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain inset-0 bg-none w-[60px]"
    />
  );
}

// Component Popup
function Popup() {
  const [isOpen, setIsOpen] = React.useState(true); // Trạng thái để mở/đóng popup

  // Hàm đóng popup
  const onClose = () => {
    setIsOpen(false); // Đóng popup
  };

  // Dữ liệu hình ảnh trang trí ở các góc
  const cornerImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/59b9819b2f8bcba5a532bac25a2a11282419b6aabd38e3a3bd70b97c7bbec430?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e", alt: "Top left decorative element" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/631194690e0d3936d5085113c8d86eb3414e79c243145ce47d95df9316e6e37e?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e", alt: "Top right decorative element" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/29ca412ec35dc720602a949c8cfc32eb796543795e2d5aa33c030019556c26ae?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9ce1976069f6b0e", alt: "Bottom left decorative element" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/37fc4790a46aa078c69f7f7e2592a3795899a59503c0ea27bb49607794680bdf?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e", alt: "Bottom right decorative element" },
  ];

  // Nếu popup đã đóng, không render gì
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 max-md:px-2">
      <div className="flex flex-col bg-neutral-900 max-w-[607px] w-full ">
        {/* Hình ảnh góc trên bên trái và bên phải */}
        <div className="relative flex flex-wrap inset-0  justify-between w-full bg-none">
          {/* Hình ảnh góc trên bên trái */}
          <ImageWithShadow src={cornerImages[0].src} alt={cornerImages[0].alt} />
          
          {/* Hình ảnh góc trên bên phải và ảnh icon đóng */}
          <div className="relative">
            <ImageWithShadow src={cornerImages[1].src} alt={cornerImages[1].alt} />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bbfb14016c67d4716e0a6366eed76fac938e5a78f6cba88c3ed041abcc52d72?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
              className="absolute top-[20px] right-[20px] w-[20px] h-[20px] object-contain z-10"
              alt="Close icon"
              onClick={onClose} // Gọi hàm onClose khi click vào icon
            />
          </div>
        </div>

        {/* Nội dung chính của popup */}
        <div className="flex flex-col self-center mt-12 w-full text-2xl font-medium leading-tight text-center text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a6a5817082f280412966ed5513456d7a3fd8ac3b8d23fcf2b01b905379ac593?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
            alt="Feedback confirmation icon"
            className="object-contain self-center rounded-none aspect-square w-[54px]"
          />
          <div className="mt-12" role="status" aria-live="polite">
            Cảm ơn bạn đã đánh giá!
          </div>
        </div>

        {/* Hình ảnh góc dưới bên trái và phải */}
        <div className="flex flex-wrap inset-0  justify-between items-end w-full">
          <ImageWithShadow src={cornerImages[2].src} alt={cornerImages[2].alt} />
          <ImageWithShadow src={cornerImages[3].src} alt={cornerImages[3].alt} />
        </div>
      </div>
    </div>
  );
}

export default Popup;
