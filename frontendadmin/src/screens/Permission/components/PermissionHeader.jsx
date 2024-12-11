import * as React from "react";

export default function PermissionHeader({ roles }) {
  return (
    <div className="flex overflow-hidden w-full justify-center items-center text-2xl font-bold leading-none bg-[#EBF1F9] h-[70px] text-neutral-900 max-md:max-w-full">
      <div className="flex flex-1 flex-shrink-0 justify-center items-center bg-[#6C8299] basis-0 text-white h-[70px]">
        <div className="gap-2.5 self-stretch my-auto">Quyền</div>
      </div>
      
      {roles.map((role, index) => (
        <div key={index} className=" min-w-[120px] flex flex-1 shrink gap-3 px-2 justify-center items-center basis-0 min-h-[70px] ">
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