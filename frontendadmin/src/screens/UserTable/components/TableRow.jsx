import * as React from "react";
<<<<<<< HEAD

function TableRow({ id, name, joinDate, revenue, lastUpdate, onRowClick }) {
  return (
    <div
      className="flex overflow-hidden flex-wrap mt-6 w-full bg-white min-h-[70px] max-md:max-w-full cursor-pointer"
      onClick={() => onRowClick(id)} // Gọi hàm `onRowClick` khi click vào dòng
    >
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{id}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{name}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{joinDate}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full whitespace-nowrap basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{revenue}</div>
      </div>
      <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <div className="gap-2.5 self-stretch my-auto">{lastUpdate}</div>
      </div>
    </div>
=======
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
>>>>>>> 0334ef35d2670e87a54dfc56ee5c5e71becc239e
  );
}

export default TableRow;
