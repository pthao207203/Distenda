import * as React from "react";

export function IconContainer({ iconSrc, iconAlt }) {
  return (
    <div className="absolute top-4 left-4 p-2 w-11 h-11 rounded-lg bg-slate-500 flex items-center justify-center">
      <img
        loading="lazy"
        src={iconSrc}
        alt={iconAlt}
        className="object-contain w-6 h-6"
      />
    </div>
  );
}
