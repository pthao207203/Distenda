import * as React from "react";
import PermissionRow from "./components/PermissionRow";
import PermissionHeader from "./components/PermissionHeader";
import ActionButtons from "./components/ActionButton";

const permissionGroups = [
  {
    title: "Tổng quan",
    permissions: ["Xem"]
  },
  {
    title: "Danh mục khóa học",
    permissions: ["Xem", "Thêm mới", "Chỉnh sửa", "Xóa"]
  },
  {
    title: "Khóa học",
    permissions: ["Xem", "Thêm mới", "Chỉnh sửa", "Xóa"]
  },
  {
    title: "Nhóm quyền", 
    permissions: ["Xem", "Thêm mới", "Chỉnh sửa", "Xóa"]
  }
];

const roles = [
  {
    name: "Quản trị viên",
    icon: "https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/6be2a4d09c558667270ec256fe0af0140bf78c959a9235fca9e3ef9efb4b3cad?apiKey=7a79403a23cb489f853e4845c47ede19&"
  },
  {
    name: "Quản lý người dùng",
    icon: "https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/931d916ce0cfe5a4cefc4e80238db86ccc690a79dd00cd5660a8bace536a336a?apiKey=7a79403a23cb489f853e4845c47ede19&"
  },
  {
    name: "Giảng viên",
    icon: "https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/6be2a4d09c558667270ec256fe0af0140bf78c959a9235fca9e3ef9efb4b3cad?apiKey=7a79403a23cb489f853e4845c47ede19&"
  }
];

export default function PermissionTable() {
  return (
    <div className="flex flex-col flex-1 shrink px-16 py-5 bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <ActionButtons />
      
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <PermissionHeader roles={roles} />
        
        {permissionGroups.map((group, index) => (
          <div key={index} className="flex flex-col mt-4 w-full max-md:max-w-full">
            <div className="text-xl font-semibold leading-none text-blue-950 max-md:max-w-full">
              {group.title}
            </div>
            <div className="flex flex-col justify-center mt-2 w-full max-md:max-w-full">
              {group.permissions.map((permission, pIndex) => (
                <PermissionRow 
                  key={pIndex}
                  permission={permission}
                  isFirst={pIndex === 0}
                  roles={roles.length}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}