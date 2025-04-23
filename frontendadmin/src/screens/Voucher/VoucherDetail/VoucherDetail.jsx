import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Lấy VoucherID từ URL
import VoucherInfo from "./components/VoucherInfo"; // Hiển thị thông tin voucher
import LinkedCourses from "./components/LinkedCourse"; // Các khóa học liên kết
import { voucherDetailService } from "./../../../services/voucher.service.js"; // Dịch vụ lấy dữ liệu voucher chi tiết

function VoucherDetail() {
  const { VoucherID } = useParams(); // Lấy VoucherID từ URL
  const [voucherData, setVoucherData] = useState(null); // State để lưu dữ liệu voucher

  useEffect(() => {
    const fetchVoucherData = async () => {
      const data = await voucherDetailService(VoucherID); // Gửi VoucherID tới API
      if (data) {
        setVoucherData(data); // Lưu dữ liệu vào state nếu có
      } else {
        console.error("Không tìm thấy voucher với ID:", VoucherID);
      }
    };

    fetchVoucherData(); // Gọi hàm fetchVoucherData
  }, [VoucherID]); // Chạy lại khi VoucherID thay đổi

  if (!voucherData) return <div>Loading...</div>; // Hiển thị khi dữ liệu chưa có

  return (
    <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
      <VoucherInfo voucher={voucherData} /> {/* Truyền dữ liệu voucher */}
      <LinkedCourses />
    </main>
  );
}

export default VoucherDetail;
