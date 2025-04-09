export default function StatusBadge() {
  return (
    <div className="flex gap-2 items-center text-xl font-medium leading-none min-w-[240px]">
      <div className="self-stretch my-auto text-neutral-900 text-opacity-50">
        Trạng thái
      </div>
      <div className="flex flex-col justify-center self-stretch p-3 my-auto w-64 min-w-[240px] text-neutral-900">
        <div className="flex gap-3 justify-center items-center px-3 py-2.5 w-full bg-lime-300 min-h-[40px] rounded-[99px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
          <div className="gap-2.5 self-stretch my-auto">Đang hoạt động</div>
        </div>
      </div>
    </div>
  );
}
