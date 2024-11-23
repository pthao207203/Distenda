import * as React from "react";
import StatCard from "./components/StatCard";
import CourseTableRow from "./components/CourseTableRow";
import SideBar from "../../layouts/private/SideBar";

const stats = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/44ce5bf7485e354020b684d5387ab84384740ddc9a19a46df183c06b96f1f975?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", title: "Doanh thu", value: "36852", percentage: "60" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4486a9f4040ea86e2f5fa1cc488c05cf6596594d7d39783008a665fef485a8?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", title: "Lợi nhuận", value: "36852", percentage: "60" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfa76ba2536cfee154467f4e8926441828266788f20c814db229252e82f53ed5?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", title: "Chi phí quảng cáo", value: "36852", percentage: "60" }
];

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/674c7cd34777f9081439f55541fe4336160fdbe2e282fbf7d636adcaced32244?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Trang chủ", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/966245d4b78d767d0a42124be3b2ecb29473b490b88eccb2f1cf941f8300bc39?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Khóa học", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2adfff62d49124471b1ae086903d2cc0ded28104b9c9cb54760bbf7b736c750?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Người dùng", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/629ea57d3530919ce312f6e99a59533a39a5d668552c93df73307fb9dd65556d?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Hóa đơn", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/05c10a21e9cc5315abf18aee9eef0356f01b91dadc7f23749db46976a6fea404?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Quản lý", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e74fa8d1b31b1ae33817d779e8e91c5dd858921c22a08d19ea41b7efe50a74f3?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Thông báo", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be22da5d86e3ab15328a6fb2e48221290182260ea988d8b52c655bc8080a663b?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Thông tin web", isActive: false }
];

const courses = [
  { courseId: "HTML2025", name: "HTML cơ bản", sold: "23", price: "1.000.000", profit: "23.000.000" },
  { courseId: "HTML2025", name: "HTML cơ bản", sold: "23", price: "1.000.000", profit: "23.000.000" },
  { courseId: "HTML2025", name: "HTML cơ bản", sold: "23", price: "1.000.000", profit: "23.000.000" }
];

function DashboardPage() {
  return (
    <div className="flex flex-col flex-1 bg-indigo-50 overflow-auto">
      {/* Stats Section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      {/* Chart Section */}
      <section className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Lợi nhuận</h3>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e0a62bc5856bf77552e4470477365b61a73866bbbed72188c51ba97d7bcacbc"
            alt="Profit Chart"
            className="w-full"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Tỉ lệ chuyển đổi</h3>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cdf6608090b1674cecf2987b505f0c0b8e003b2f0fe6439247be1b280280be3"
            alt="Conversion Rate Chart"
            className="w-full"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Danh sách khóa học</h3>
          <div className="table-responsive">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 p-2">Mã khóa học</th>
                  <th className="border border-gray-200 p-2">Tên khóa</th>
                  <th className="border border-gray-200 p-2">Đã bán</th>
                  <th className="border border-gray-200 p-2">Giá</th>
                  <th className="border border-gray-200 p-2">Lợi nhuận</th>
                  <th className="border border-gray-200 p-2">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <CourseTableRow key={index} {...course} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
export default DashboardPage;