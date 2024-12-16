export default function DeleteButton() {
  return (
    <div className="flex absolute z-0 gap-2.5 items-start self-start text-xl font-medium leading-none text-white right-[67px] top-[67px]">
      <button className="flex gap-3 justify-center items-center px-3 py-3 bg-red-600 rounded-lg min-h-[46px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="gap-2.5 self-stretch my-auto">Xóa</span>
      </button>
    </div>
  );
}
