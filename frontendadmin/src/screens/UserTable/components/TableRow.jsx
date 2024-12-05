import * as React from "react";

function TableRow({ id, name, joinDate, revenue, lastUpdate, onRowClick }) {
  return (
    <div
      className="flex overflow-hidden flex-wrap mt-6 w-full bg-white h-[70px] cursor-pointer"
      onClick={() => onRowClick(id)}
    >
      {/* Mã người dùng */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span>{id}</span>
      </div>

      {/* Tên người dùng */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span>{name}</span>
      </div>

      {/* Thời gian tham gia */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span>{joinDate}</span>
      </div>

      {/* Doanh thu */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span>{revenue}</span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span>{lastUpdate}</span>
      </div>
    </div>
  );
}

export default TableRow;
