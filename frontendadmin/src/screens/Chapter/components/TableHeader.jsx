export default function TableHeader() {
  return (
    <div className="flex overflow-hidden flex-wrap w-full rounded-t-3xl bg-slate-500 h-[70px] max-md:max-w-full">
      <div className="flex gap-3 justify-center items-center px-3 h-full whitespace-nowrap bg-indigo-50 w-[200px]">
        <div className="gap-2.5 self-stretch my-auto">STT</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full text-white basis-0 min-w-[240px]">
        <div className="gap-2.5 self-stretch my-auto">Tên bài</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 h-full bg-indigo-50 basis-0 min-w-[240px]">
        <div className="gap-2.5 self-stretch my-auto">Lần cuối cập nhật</div>
      </div>
      <div className="flex gap-3 justify-center items-center px-3 h-full text-white min-w-[240px] w-[247px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed99d5fa1c35d0b53a77a4661afcb70ba8fd8f57d1e0f756eab68f69535ca53?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
        <div className="gap-2.5 self-stretch my-auto">Bài mới</div>
      </div>
    </div>
  );
}
