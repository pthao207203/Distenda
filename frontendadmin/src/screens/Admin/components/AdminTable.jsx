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
      {/* Header */}
      {/* <div className="flex overflow-hidden w-full bg-indigo-50 h-[70px]">
        <TableHeader text="Ảnh" />
        <TableHeader text="Họ và tên" />
        <TableHeader text="Chức vụ" />
        <TableHeader text="Thời gian tham gia" />
        <TableHeader text="Trạng thái" />
      </div> */}

      {/* Rows */}
      {adminData.map((admin, index) => (
        <TableRow key={index} {...admin} />
      ))}
    </div>
  );
}

function TableHeader({ text }) {
  return (
    <div className="flex flex-1 justify-center items-center min-w-[240px] text-center px-3 py-2 bg-indigo-50">
      <span>{text}</span>
    </div>
  );
}

function TableRow({ avatar, name, role, joinDate, status }) {
  const statusClass = status === "active" ? "bg-lime-300" : "bg-amber-300";
  const statusText = status === "active" ? "Đang hoạt động" : "Tạm dừng";

  return (
    <article className="flex overflow-hidden flex-wrap mt-2 w-full bg-white h-[70px] cursor-pointer">
      {/* Avatar */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <img
          src={avatar}
          alt="Admin Avatar"
          className="object-cover rounded-full w-[50px] h-[50px]"
        />
      </div>

      {/* Tên */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px]">
        <span className="text-center">{name}</span>
      </div>

      {/* Chức vụ */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span className="text-center">{role}</span>
      </div>

      {/* Thời gian tham gia */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px]">
        <span className="text-center">{joinDate}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <div
          className={`flex justify-center items-center min-w-[240px] py-2 rounded-full ${statusClass} text-center`}
        >
          <span>{statusText}</span>
        </div>
      </div>
    </article>
  );
}

export default AdminTable;
