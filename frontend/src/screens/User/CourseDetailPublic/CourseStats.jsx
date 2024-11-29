import React from 'react';

const stats = [
  { label: "Số lượng bài học", value: "50 bài" },
  { label: "Thời gian học", value: "5 tháng" },
  { label: "Số lượng project", value: "6 project vừa và lớn" },
  { label: "Yêu cầu đầu vào", value: "Kỹ thuật lập trình" },
  { label: "Thời gian học", value: "5 tháng" }
];

export default function CourseStats() {
  return (
    <div className="flex flex-col w-full text-xl font-bold max-md:max-w-full">
      {stats.map((stat, index) => (
        <div key={index} className="mt-4 max-md:max-w-full">
          <span className="font-bold">{stat.label} : </span>
          <span className="font-medium text-white">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}