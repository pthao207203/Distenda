import * as React from "react";
import StatCard from "./StatCard";

const stats = [
  { icon: "./icons/chart.svg", title: "Doanh thu", value: "36852", percentage: "60" },
  { icon: "./icons/dollar.svg", title: "Lợi nhuận", value: "36852", percentage: "60" },
  { icon: "./icons/bag.svg", title: "Chi phí quảng cáo", value: "36852", percentage: "60" },
];

export default function StatSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-indigo-50">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
