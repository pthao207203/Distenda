import * as React from "react";
import { Link } from "react-router-dom";

function TableRow(user) {
  const getStatusStyles = (status) => {
    switch (status) {
      case 1:
        return 'bg-[#D1F669]';
      default:
        return 'bg-red-600 text-white';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 1:
        return 'Đang hoạt động';
      default:
        return 'Đã chặn';
    }
  };
  return (
    <Link
      to={`/user-details/${user._id}`}
      className="flex overflow-hidden flex-wrap mt-6 w-full bg-white h-[70px] cursor-pointer"
    >
      {/* Mã người dùng */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px]">
        <span>{user.UserFullName}</span>
      </div>

      {/* Tên người dùng */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{user.createdAt}</span>
      </div>

      {/* Thời gian tham gia */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px]">
        <span>0</span>
      </div>

      {/* Doanh thu */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{user.createdAt}</span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className={`flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px] h-[60px] rounded-[99px] ${getStatusStyles(user.UserStatus)}`}>
        <span>{getStatusText(user.UserStatus)}</span>
      </div>
    </Link>
  );
}

export default TableRow;
