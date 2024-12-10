import * as React from "react";

export const PersonalInfoField = ({ label, value }) => {
  return (
    <div className="flex flex-col grow shrink w-72 min-h-[91px] min-w-[240px]">
      <div className="text-neutral-900 text-opacity-50">{label}</div>
      <div className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900">
        {value}
      </div>
    </div>
  );
};
