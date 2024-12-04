import * as React from "react";

export default function StatCard({ title, value, percentage, iconSrc }) {
  return (
    <div className="flex flex-col p-4 my-2 rounded-3xl bg-slate-500 min-w-[200px] md:w-[240px] lg:w-[290px] shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          loading="lazy"
          src={iconSrc}
          alt={`${title} icon`}
          className="w-10 h-10 object-contain"
        />
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>

      {/* Value */}
      <div className="text-3xl font-bold text-white mb-2">{value}</div>

      {/* Percentage */}
      <div className="text-lg text-white">{percentage}</div>
    </div>
  );
}
