import * as React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

function AdminTable(admin) {
  const statusClass = admin.AdminDeleted === 1 ? "bg-[#D1F669]" : "bg-[#FFD75B]";
  const statusText = admin.AdminDeleted === 1 ? "Đang hoạt động" : "Tạm dừng";

  return (
    <Link
    to={`/admin/detail/${admin._id}`}
    className="flex overflow-hidden flex-wrap mt-3 w-full bg-white text-[#131313] min-h-[70px] cursor-pointer"
  >
      {/* Avatar */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <img
          src={admin.AdminAvatar}
          alt="Admin Avatar"
          className="object-cover rounded-full w-[50px] h-[50px]"
        />
      </div>

      {/* Tên */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{admin.AdminFullName}</span>
      </div>

      {/* Chức vụ */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{admin?.role?.RoleName}</span>
      </div>

      {/* Thời gian tham gia */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{moment(admin.createdBy.createdAt).format("DD/MM/YYYY hh:mm:ss")}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 rounded-[99px] justify-center items-center inline-flex ${statusClass} text-center`}
        >
          <span className="text-[#131313] text-center text-xl font-medium truncate">{statusText}</span>
        </div>
      </div>
    </Link>
  );
}

export default AdminTable;
