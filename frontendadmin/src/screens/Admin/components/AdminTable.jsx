import * as React from "react";

const adminData = [
  {
    avatar: "https://via.placeholder.com/48", // Đường dẫn ảnh đại diện
    name: "Võ Tấn Khoa",
    role: "Quản trị viên",
    joinDate: "29/11/2024 23:13",
    status: "active",
  },
  {
    avatar: "https://via.placeholder.com/48", // Đường dẫn ảnh đại diện
    name: "Võ Tấn Khoa",
    role: "Giảng viên",
    joinDate: "29/11/2024 23:13",
    status: "active",
  },
  {
    avatar: "https://via.placeholder.com/48", // Đường dẫn ảnh đại diện
    name: "Võ Tấn Khoa",
    role: "Giảng viên",
    joinDate: "29/11/2024 23:13",
    status: "active",
  },
  {
    avatar: "https://via.placeholder.com/48", // Đường dẫn ảnh đại diện
    name: "Võ Tấn Khoa",
    role: "Quản lý khóa học",
    joinDate: "29/11/2024 23:13",
    status: "paused",
  },
];

function AdminTable() {
  return (
    <div className="flex flex-col mt-2 w-full max-md:max-w-full"> 
      {adminData.map((admin, index) => (
        <TableRow key={index} {...admin} />
      ))}
    </div>
  );
}


function TableRow({ avatar, name, role, joinDate, status }) {
  const statusClass = status === "active" ? "bg-lime-300" : "bg-amber-300";
  const statusText = status === "active" ? "Đang hoạt động" : "Tạm dừng";

  return (
    <article className="flex overflow-hidden flex-wrap mt-2 w-full bg-white text-[#131313]  min-h-[70px] cursor-pointer">
      {/* Avatar */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <img
          src={avatar}
          alt="Admin Avatar"
          className="object-cover rounded-full w-[50px] h-[50px]"
        />
      </div>

      {/* Tên */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{name}</span>
      </div>

      {/* Chức vụ */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{role}</span>
      </div>

      {/* Thời gian tham gia */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
        <span className="text-[#131313] text-center text-xl font-medium truncate">{joinDate}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex basis-1/5 min-w-0 justify-center items-center">
        <div
          className={`self-center shrink w-[90%] max-w-full px-4 py-2 rounded-[99px] justify-center items-center inline-flex ${statusClass} text-center`}
        >
          <span className="text-[#131313] text-center text-xl font-medium truncate">{statusText}</span>
        </div>
      </div>
    </article>
  );
}

export default AdminTable;
