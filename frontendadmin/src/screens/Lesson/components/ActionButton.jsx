import * as React from "react";

export default function ActionButton({
  icon,
  label,
  bgColor = "bg-[#6C8299]",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-3 justify-center items-center px-3 py-3 ${bgColor} rounded-lg min-h-[46px] text-white`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <div className="gap-2.5 self-stretch my-auto">{label}</div>
    </button>
  );
}
