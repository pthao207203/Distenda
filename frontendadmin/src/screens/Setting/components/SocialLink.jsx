import * as React from "react";

export function SocialLink({ Icon, URL, Value, handleChange }) {
  console.log(URL)
  return (
    <div className="flex overflow-hidden flex-wrap justify-between items-center mt-6 w-full leading-none whitespace-nowrap rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] text-neutral-900 max-md:max-w-full">
      {/* Hiển thị biểu tượng */}
      <img
        loading="lazy"
        src={Icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.3] w-[82px]"
      />

      {/* Input URL */}
      <input
        type="url"
        value={Value} // Liên kết giá trị với state
        onChange={handleChange} // Gắn hàm xử lý khi giá trị thay đổi
        className="flex-1 shrink gap-2.5 self-stretch p-2.5 my-auto min-w-[240px] max-md:max-w-full"
      />
    </div>
  );
}
