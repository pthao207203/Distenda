export default function LessonRow({ number, name, lastUpdated }) {
  return (
    <div className="flex overflow-hidden flex-wrap mt-3 w-full bg-white h-[70px] cursor-pointer">
      {/* STT */}
      <div className="flex justify-center items-center px-3 h-full w-[200px] bg-[#EBF1F9] shadow-md">
        <span className="text-[#131313] text-center text-xl font-medium truncate">
          {number}
        </span>
      </div>

      {/* Tên bài học */}
      <div className="flex flex-1 shrink justify-center items-center px-3 h-full bg-white shadow-md min-w-[240px]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">
          {name}
        </span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex flex-1 shrink justify-center items-center px-3 h-full bg-[#EBF1F9] shadow-md min-w-[240px]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">
          {lastUpdated}
        </span>
      </div>

      {/* Hành động */}
      <div className="flex justify-center items-center gap-2 px-3 h-full w-[245px]">
        <button className="flex gap-3 justify-center items-center px-4 py-2 bg-[#D1F669] rounded-[99px] h-[50px] shadow-md hover:bg-[#C5E65F] transition-all">
          <span className="text-[#131313] text-center text-lg font-medium">
            Sửa
          </span>
        </button>
        <button className="flex gap-3 justify-center items-center px-4 py-2 bg-[#FFD75B] rounded-[99px] h-[50px] shadow-md hover:bg-[#FFC640] transition-all">
          <span className="text-[#131313] text-center text-lg font-medium">
            Ẩn
          </span>
        </button>
      </div>
    </div>
  );
}
