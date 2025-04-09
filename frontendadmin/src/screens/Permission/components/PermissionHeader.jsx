import * as React from "react";

export default function PermissionHeader({ roles, setSelectedRoles }) {
  const [selectedRoleIndex, setSelectedRoleIndex] = React.useState(null);

  const handleRoleClick = (index, id) => {
    setSelectedRoleIndex(selectedRoleIndex === index ? null : index);
    setSelectedRoles(prev =>
      prev.includes(id)
        ? prev.filter(role => role !== id)
        : [...prev, id]
    );
  };
  return (
    <div className="flex w-full basic-4 justify-between basic-4 items-center text-[20px] font-bold leading-none bg-[#EBF1F9] min-h-[70px] text-neutral-900 max-md:min-w-[600px]">
      <div className="flex flex-1 justify-center items-center max-md:px-[4px] bg-[#6C8299] basic-full text-white max-md:min-h-[90px] min-h-[70px] min-w-[120px]">
        <div className="gap-2.5 self-stretch my-auto">Quyền</div>
      </div>
      {roles.map((role, index) => {
        // Kiểm tra xem phần tử đã được chọn hay chưa
        const isSelected = selectedRoleIndex === index;

        return (
          <div
            key={index}
            className={`min-w-[120px] flex flex-1 shrink gap-3 px-2 justify-center items-center basis-0 min-h-[70px] ${isSelected ? "bg-[#FF3C00]/20" : "" // Thêm màu nền khi được chọn
              }`}
            onClick={() => handleRoleClick(index, role._id)}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/6be2a4d09c558667270ec256fe0af0140bf78c959a9235fca9e3ef9efb4b3cad?apiKey=7a79403a23cb489f853e4845c47ede19&"
              alt={`${role.RoleName} icon`}
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
            />
            <div className="gap-2.5 self-stretch my-auto">{role.RoleName}</div>
          </div>
        );
      })}
    </div>
  );
}