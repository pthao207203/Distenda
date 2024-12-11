import * as React from "react";

export function ConfirmationButton({ text, variant = "primary", onClick }) {
  const baseClasses =
    "flex gap-3 justify-center items-center  px-6 py-3 rounded-lg min-w-[120px] max-w-full transition-all duration-300";
  const variantClasses =
    variant === "primary"
      ? "text-white bg-slate-500 hover:bg-slate-700"
      : "text-blue-950 bg-slate-300 hover:bg-slate-400";

  return (
    <button
      onClick={() => {
        console.log(`Button clicked: ${text}`);
        if (onClick) onClick();
      }}
      className={`${baseClasses} ${variantClasses}`}
      tabIndex={0}
    >
      <span className="my-auto">{text}</span>
    </button>
  );
}
