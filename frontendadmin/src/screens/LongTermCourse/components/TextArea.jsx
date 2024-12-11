import * as React from "react";

function TextArea({ label, minHeight }) {
  return (
    <div className="flex flex-col mt-7 w-full text-xl font-medium leading-none text-neutral-900 max-md:max-w-full">
      <label className=" max-md:max-w-full">{label}</label>
      <div 
        className="bg-black  flex flex-1 gap-2.5 py-2.5 mt-2 w-full rounded-lg border border-solid border-slate-500 max-md:max-w-full"
        style={{ minHeight }}
      />
    </div>
  );
}

export default TextArea;