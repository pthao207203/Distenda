import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import StatCard from "./components/StatCard";
import CourseTableRow from "./components/CourseTableRow";
import TableHeader from "./components/TableHeader";
import SideBar from "../../layouts/private/SideBar";
import { dashboardController } from "../../controllers/home.controller";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { Chart as ChartJS, registerables } from 'chart.js';

function DashboardPage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const chartRef = useRef(null);  // Chart for profit
  const chartRefDoughnut = useRef(null);  // Chart for conversion rate (added this ref)


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

  const totalPayment = data?.length || 0; // Đảm bảo không lỗi nếu data undefined

  ChartJS.register(...registerables);

  useEffect(() => {
    // Biểu đồ lợi nhuận (Line chart with multi-axis)
    if (data && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const config = {
        type: 'line',
        data: {
          labels: data?.monthLabels,  // Nhãn tháng từ backend
          datasets: [
            {
              label: 'Lợi Nhuận',  // Dataset cho 'Doanh thu'
              data: data?.profitData,
              borderColor: '#36a2eb',  // Màu đường biều đồ
              backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Màu nền đường biểu đồ
              fill: true,  // Điền vùng bên dưới đường
              borderWidth: 2,  // Độ dày đường
            },
            {
              label: 'Doanh Thu',  // Dataset cho 'Lợi nhuận'
              data: data?.incomeData,
              borderColor: '#FF6384',  // Màu đường biểu đồ lợi nhuận
              backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Màu nền đường biểu đồ lợi nhuận
              fill: true,  // Điền vùng bên dưới đường
              borderWidth: 2,  // Độ dày đường
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',  // Đặt vị trí của legend
            },
            title: {
              display: true,
              text: 'Biểu đồ lợi nhuận và doanh thu',  // Tiêu đề biểu đồ
            }
          },
          scales: {
            y: {
              type: 'linear',  // Trục y kiểu tuyến tính
              display: true,
              position: 'left',  // Đặt trục y bên trái
            }
          }
        }
      }

      const chart = new ChartJS(ctx, config); 

    }

    // Biểu đồ Tỉ lệ chuyển đổi (Polar Area Chart) - Dữ liệu tĩnh
    if (chartRefDoughnut.current) { 
      console.log('dooo');
      const ctx = chartRefDoughnut.current.getContext('2d');
      const config = {
        type: 'polarArea',
        data: {
          labels: data?.labels,  // Nhãn từ backend
          datasets: [{
            data: data?.data,  // Dữ liệu từ backend
            backgroundColor: ['#CDD5DF', '#97D0F7', '#FFB74D', '#FF6384'],
            hoverOffset: 4,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Tỉ lệ đơn hàng theo mức giá khóa học' }
          }
        }
      };
      const polarAreaChart = new ChartJS(ctx, config);  // Tạo biểu đồ Polar Area

    }
  }, 
  [data]);  // Chạy lại khi dữ liệu thay đổi

  if (loading) {
    return (
      <Loading />
    )
  }
  console.log("dashboard => ", data)

  const stats = [
    {
      title: "Doanh thu",
      value: new Intl.NumberFormat('vi-VN').format(data?.totalIncome), 
      percentage: data?.totalIncomeAgo > 0 
      ? ((data?.totalIncome - data?.totalIncomeAgo) / data?.totalIncomeAgo) * 100 
      : (data?.totalIncome > 0 ? 100 : 0),
      iconSrc: "./icons/chart.svg",
    },
    {
      title: "Lợi nhuận",
      value: new Intl.NumberFormat('vi-VN').format(data?.totalProfit),
      percentage: data?.totalProfitAgo > 0 
      ? ((data?.totalProfit - data?.totalProfitAgo) / data?.totalProfitAgo) * 100 
      : (data?.totalProfit > 0 ? 100 : 0),
      iconSrc: "./icons/dollar.svg",
    },
    {
      title: "Đơn hàng",
      value: data?.totalOrders,
      percentage:  data?.totalOrdersAgo > 0
      ? ((data?.totalOrders - data?.totalOrdersAgo) / data?.totalOrders)* 100 
      : (data?.totalOrders > 0 ? 100 : 0),
      iconSrc: "./icons/bag.svg",
    },
    {
      title: "Học viên",
      value: data?.totalStudents,
      percentage: data?.totalStudentsAgo > 0 
      ? ((data?.totalStudents - data?.totalStudentsAgo) / data?.totalStudents)* 100 
      : (data?.totalStudents > 0 ? 100 : 0),
      iconSrc: "./icons/star.svg"
    }
  ];
  // console.log("totalIncome", (data.totalIncome - data.totalIncomeAgo) / data.totalIncome * 100)
  // console.log("totalProfit", stats[1].percentage)
  // console.log("data?.totalIncome", data?.totalIncome)
  // console.log("data?.totalIncomeAgo", data?.totalIncomeAgo)
  console.log(chartRefDoughnut.current);  // Kiểm tra xem chartRefDoughnut có giá trị hợp lệ không


  return (
    <>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
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
            <section className="py-8 grid grid-cols-1 lg:grid-cols-8 gap-8 w-full">  {/* Thay đổi số cột trong grid */}
              {/* Biểu đồ Lợi nhuận */}
              <div className="bg-white p-6 rounded-[20px] border border-[#cdd5de] col-span-5"> {/* col-span-5 để chiếm 5 cột */}
                <h3 className="text-lg font-semibold mb-4">Lợi nhuận và Doanh Thu</h3>
                <canvas ref={chartRef} width="100%" height="50%"></canvas>

              </div>

              {/* Biểu đồ Tỉ lệ chuyển đổi */}
              <div className="bg-white p-6 rounded-[20px] border border-[#cdd5de] col-span-3">
                <h3 className="text-lg font-semibold mb-4">Tỉ lệ phân bổ học viên theo danh mục khóa học</h3>
                <canvas ref={chartRefDoughnut} width="10%" height="10%"></canvas>
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
    </>
  );
}

export default DashboardPage;