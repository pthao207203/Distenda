import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import PermissionRow from "./components/PermissionRow";
import PermissionHeader from "./components/PermissionHeader";
import ActionButtons from "./components/ActionButton";
import { rolesController } from "../../controllers/role.controller";
import Loading from "../../components/Loading";

export default function PermissionTable() {
  const permissionGroups = [
    {
      title: "Tổng quan",
      permissions: ["dashboard_view", "", "", ""],
    },
    {
      title: "Khóa học",
      permissions: [
        "course_view",
        "course_create",
        "course_edit",
        "course_delete",
      ],
    },
    {
      title: "Người dùng",
      permissions: ["user_view", "user_create", "user_edit", "user_delete"],
    },
    {
      title: "Quản trị viên",
      permissions: ["admin_view", "admin_create", "admin_edit", "admin_delete"],
    },
    {
      title: "Hoá đơn",
      permissions: ["payment_view", "payment_create", "", "payment_delete"],
    },
    {
      title: "Voucher",
      permissions: [
        "voucher_view",
        "voucher_create",
        "voucher_edit",
        "voucher_delete",
      ],
    },
    {
      title: "Banner",
      permissions: [
        "banner_view",
        "banner_create",
        "banner_edit",
        "banner_delete",
      ],
    },
    {
      title: "Nhóm quyền",
      permissions: ["role_view", "role_create", "role_edit", "role_delete"],
    },
    {
      title: "Thông báo",
      permissions: ["noti_view", "noti_create", "noti_edit", "noti_delete"],
    },
    {
      title: "Thông tin web",
      permissions: ["setting_view", "", "setting_edit", ""],
    },
  ];

  // const roles = [
  //   {
  //     name: "Quản trị viên",
  //     icon: "https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/6be2a4d09c558667270ec256fe0af0140bf78c959a9235fca9e3ef9efb4b3cad?apiKey=7a79403a23cb489f853e4845c47ede19&"
  //   },
  //   {
  //     name: "Quản lý người dùng",
  //     icon: "https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/931d916ce0cfe5a4cefc4e80238db86ccc690a79dd00cd5660a8bace536a336a?apiKey=7a79403a23cb489f853e4845c47ede19&"
  //   },
  //   {
  //     name: "Giảng viên",
  //     icon: "https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/6be2a4d09c558667270ec256fe0af0140bf78c959a9235fca9e3ef9efb4b3cad?apiKey=7a79403a23cb489f853e4845c47ede19&"
  //   }
  // ];
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      const result = await rolesController(setLoading);
      // console.log(result)
      if (result) {
        setRoles(result);
        const initialPermissions = {};
        result.forEach((role) => {
          initialPermissions[role._id] = new Set(role.RolePermissions);
        });
        setPermissions(initialPermissions);
      }
    }

    fetchData();
  }, []);
  console.log(permissions);
  const handlePermissionChange = (roleId, permissionName, checked) => {
    console.log(permissions);
    setPermissions((prevPermissions) => {
      const updatedPermissions = { ...prevPermissions };
      if (!updatedPermissions[roleId]) {
        updatedPermissions[roleId] = new Set();
      }
      if (checked) {
        updatedPermissions[roleId].add(permissionName); // Thêm quyền
      } else {
        updatedPermissions[roleId].delete(permissionName); // Xóa quyền
      }
      return updatedPermissions;
    });
  };

  if (loading) {
    return <Loading />;
  }
  // console.log("roles => ", Array.isArray(Object.values(roles)))

  const formattedPermissions = Object.entries(permissions).map(
    ([roleId, perms]) => ({
      id: roleId,
      permissions: Array.from(perms), // Chuyển từ Set về Array để truyền JSON
    })
  );

  return (
    <>
      <Helmet>
        <title>Phân quyền</title>
      </Helmet>
      <div className="flex flex-col flex-1 px-16 py-5 bg-white basis-0 max-md:px-[5px]  w-full max-md:min-w-[600px]">
        <ActionButtons
          selectedRoles={selectedRoles}
          permissions={formattedPermissions}
        />

        <div className="mt-6">
          <PermissionHeader roles={roles} setSelectedRoles={setSelectedRoles} />

          {permissionGroups.map((group, index) => (
            <div
              key={index}
              className="mt-4 justify-between w-full items-center "
            >
              <div className="text-xl font-semibold leading-none text-[#14375F]">
                {group.title}
              </div>
              <div className="flex flex-col justify-center mt-2 w-full max-md:w-screen">
                {group.permissions.map((permission, pIndex) => (
                  <>
                    {permission !== "" && (
                      <PermissionRow
                        key={pIndex}
                        index={pIndex}
                        permission={permission}
                        isFirst={pIndex === 0}
                        roles={Object.values(roles)}
                        onPermissionChange={handlePermissionChange}
                      />
                    )}
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
