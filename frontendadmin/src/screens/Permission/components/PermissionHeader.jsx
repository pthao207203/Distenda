import * as React from "react";

export default function PermissionHeader({ roles }) {
  return (
    <div className="flex w-full basic-4 justify-between basic-4 items-center text-[20px] font-bold leading-none bg-[#EBF1F9] min-h-[70px] text-neutral-900 max-md:min-w-[600px]">
      <div className="flex flex-1 justify-center items-center max-md:px-[4px] bg-[#6C8299] basic-full text-white max-md:min-h-[90px] h-[70px] min-w-[120px]">
        <div className="gap-2.5 self-stretch my-auto">Quyền</div>
      </div>
      
      {roles.map((role, index) => (
        <div key={index} className=" min-w-[120px] flex flex-1 shrink gap-3 px-2 justify-center items-center basis-0 max-md:min-h-[90px] h-[70px] ">
          <img
            loading="lazy"
            src={role.icon}
            alt={`${role.name} icon`}
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
          <div className="gap-2.5 self-stretch my-auto">{role.name}</div>
        </div>
      ))}
    </div>
  );
}