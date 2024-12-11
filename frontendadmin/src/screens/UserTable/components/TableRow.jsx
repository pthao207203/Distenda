import * as React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

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
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span>{user.UserFullName}</span>
      </div>

      {/* Tên người dùng */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{moment(user.createdAt).format("DD/MM/YYYY hh:mm:ss")}</span>
      </div>

      {/* Thời gian tham gia */}
      <div className="flex flex-1 shrink justify-center items-center bg-[#EBF1F9] min-w-[240px]">
        <span>0</span>
      </div>

      {/* Doanh thu */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span>{moment(user.createdAt).format("DD/MM/YYYY hh:mm:ss")}</span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <div
          className={`flex gap-3 justify-center items-center min-w-[240px] py-2.5 w-280 ${getStatusStyles(
            user.UserStatus
          )} min-h-[40px] rounded-[99px]`}
        >
          <span>{getStatusText(user.UserStatus)}</span>
        </div>
      </div>
    </Link>
  );
}

export default TableRow;
