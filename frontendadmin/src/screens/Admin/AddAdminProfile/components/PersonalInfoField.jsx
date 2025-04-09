import * as React from "react";

export const PersonalInfoField = ({ label, value, onChange, id }) => {
  return (
    <div className="flex flex-col grow shrink w-full">
      <label className="text-neutral-900 text-opacity-50 whitespace-nowrap">{label}</label>
      <input
        id={id}
        type="text"
        className="flex flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
        value={value || ""}
        onChange={onChange}
      />
    </div>
  );
};
