import * as React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

function TableRow(user) {
  const getStatusStyles = (status) => {
    switch (status) {
      case 1:
        return 'bg-[#D1F669]';
      default:
        return 'bg-[#DF322B] text-white';
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
      to={`/user/detail/${user._id}`}
      className="flex overflow-hidden flex-wrap mt-3 w-full bg-white text-[#131313] min-h-[70px] cursor-pointer"
    >
      {/* Tên người dùng */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{user.UserFullName}</span>
      </div>

      {/* Thời gian tham gia  */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{moment(user.createdAt).format("DD/MM/YYYY hh:mm:ss")}</span>
      </div>

      {/* Doanh thu */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{user.UserMoney}</span>
      </div>

      {/* Lần cuối cập nhật */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{moment(user.createdAt).format("DD/MM/YYYY hh:mm:ss")}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 justify-center items-center inline-flex ${getStatusStyles(
            user.UserStatus
          )} min-h-[40px] rounded-[99px]`}
        >
          <span className="text-center text-xl font-medium truncate">{getStatusText(user.UserStatus)}</span>
        </div>
      </div>
    </Link>
  );
}

export default TableRow;
