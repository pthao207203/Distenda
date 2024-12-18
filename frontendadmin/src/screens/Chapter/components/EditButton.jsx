export default function EditButton({ onClick }) {
  return (
    <div className="flex gap-2.5 items-center self-stretch my-auto font-medium leading-none text-white">
      <button onClick={onClick} className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto rounded-lg bg-slate-500 min-h-[46px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/633de2d3639375a6ff1a98039c27b613549cb8289fb7e40b9d60eb0e5e6224cc?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="gap-2.5 self-stretch my-auto">Chỉnh sửa</span>
      </button>
    </div>
  );
}
