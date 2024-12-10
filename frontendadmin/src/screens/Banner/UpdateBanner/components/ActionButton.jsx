import * as React from "react";

function ActionButton({ icon, text, variant }) {
  const bgColor = variant === "red" ? "bg-red-600" : "bg-slate-500";
  
  return (
    <button 
      className={`flex gap-3 justify-center items-center px-3 py-3 rounded-lg ${bgColor} min-h-[46px]`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <span className="gap-2.5 self-stretch my-auto">{text}</span>
    </button>
  );
}

export default ActionButton;