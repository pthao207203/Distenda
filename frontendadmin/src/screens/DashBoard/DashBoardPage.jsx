import React, { useState, useEffect } from "react";
import StatCard from "./components/StatCard";
import CourseTableRow from "./components/CourseTableRow";
import TableHeader from "./components/TableHeader";
import SideBar from "../../layouts/private/SideBar";
import { dashboardController } from "../../controllers/home.controller";
import { Link } from "react-router-dom"
import Loading from "../../components/Loading"; 

function DashboardPage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      const result = await dashboardController(setLoading);
      // console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }
  console.log("dashboard => ", data)

  const stats = [
    {
      title: "Doanh thu",
      value: data?.totalIncome,
      percentage: data?.totalIncomeAgo !== 0 ? data?.totalIcome % data?.totalIncomeAgo * 100 : 200,
      iconSrc: "./icons/chart.svg",
    },
    {
      title: "Lợi nhuận",
      value: data?.totalProfit,
      percentage: data?.totalProfitAgo !== 0 ? data?.totalProfit % data?.totalProfitAgo * 100 : 200,
      iconSrc: "./icons/dollar.svg",
    },
    {
      title: "Chi phí quảng cáo",
      value: "36852",
      percentage: 160,
      iconSrc: "./icons/bag.svg",
    },
    {
      title: "Đánh giá",
      value: "3.9",
      percentage: 160,
      iconSrc: "./icons/star.svg"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Stats Section */}
      <main>
        <div className="max-w-full flex flex-col items-center w-full p-16 font-medium bg-white basis-0 max-md:p-5 max-md:max-w-full">
          <div className="flex flex-1 flex-wrap flex-grow shrink gap-4 w-full justify-evenly items-center text-white max-md:max-w-full">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Chart Section */}
          <section className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Biểu đồ Lợi nhuận */}
            <div className="bg-white p-6 rounded-[20px] border border-[#cdd5de]">
              <h3 className="text-lg font-semibold mb-4">Lợi nhuận</h3>
              <div className="relative flex flex-col items-start rounded-3xl overflow-hidden">
                <img
                  loading="lazy"
                  src="./ProfitChart.png"
                  alt="Profit chart"
                  className="w-full h-[350px] object-fill"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-80"></div>
                  <div className="relative z-10 flex gap-3 items-center px-4 py-2">
                    <h4 className="text-xl font-medium">Lợi nhuận</h4>
                  </div> */}
              </div>
            </div>

            {/* Biểu đồ Tỉ lệ chuyển đổi */}
            <div className="bg-white p-6 rounded-[20px] border border-[#cdd5de] ">
              <h3 className="text-lg font-semibold mb-4">Tỉ lệ chuyển đổi</h3>
              <div className="relative">
                <div className="flex flex-wrap gap-3.5 items-center text-sm">
                  <div className="flex items-center">
                    <div className="w-[30px] h-[30px] bg-[#CDD5DF] rounded-full"></div>
                    <span className="ml-3">Thoát trang</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[30px] h-[30px] bg-[#6C8299] rounded-full"></div>
                    <span className="ml-3">Xem chi tiết</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[30px] h-[30px] bg-[#6C8299] rounded-full"></div>
                    <span className="ml-3">Thêm vào giỏ</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[30px] h-[30px] bg-amber-300 rounded-full"></div>
                    <span className="ml-3">Thanh toán</span>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/5cdf6608090b1674cecf2987b505f0c0b8e003b2f0fe6439247be1b280280be3?apiKey=ce9d43b270ae41158192dec03af70a1a&"
                  alt="Conversion rate chart"
                  className="mt-6 w-full h-[400px] object-contain"
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col mt-1 w-full text-xl text-neutral-900 max-md:max-w-full">
            <TableHeader />
            {data?.courses.map((course, index) => (
              <CourseTableRow key={index} {...course} />
            ))}

            <button className="flex flex-1 justify-center items-start self-center px-5 py-3 max-w-full bg-[#EBF1F9] rounded-lg mt-[20px] max-md:mt-10">
              <Link to="/courses" className="self-center">Xem tất cả</Link>
            </button>
          </section>
        </div>

      </main>
    </div>
  );
}

export default DashboardPage;