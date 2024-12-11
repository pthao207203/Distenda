import * as React from "react";

export function SocialLink({ icon, initialUrl }) {
  // Tạo state để lưu trữ giá trị URL
  const [url, setUrl] = React.useState(initialUrl);

  // Hàm xử lý khi người dùng thay đổi giá trị input
  const handleChange = (event) => {
    setUrl(event.target.value); // Cập nhật state với giá trị mới
  };

  return (
    <div className="flex overflow-hidden flex-wrap justify-between items-center mt-6 w-full leading-none whitespace-nowrap rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] text-neutral-900 max-md:max-w-full">
      {/* Hiển thị biểu tượng */}
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.3] w-[82px]"
      />

      {/* Input URL */}
      <input
        type="url"
        value={url} // Liên kết giá trị với state
        onChange={handleChange} // Gắn hàm xử lý khi giá trị thay đổi
        className="flex-1 shrink gap-2.5 self-stretch p-2.5 my-auto min-w-[240px] max-md:max-w-full"
      />
    </div>
  );
}
