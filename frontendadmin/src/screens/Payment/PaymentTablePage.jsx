import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import PaymentRow from "./components/PaymentRow";
import TableHeader from "./components/TableHeader";
import SearchBar from "../../layouts/private/SearchBar";
import { payController } from "../../controllers/pay.controller";
import Loading from "../../components/Loading";

function PaymentTable() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Sử dụng hook điều hướng
  useEffect(() => {
    async function fetchData() {
      // console.log("vao")
      const result = await payController(setLoading);
      // console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log("Pay => ", data)
  const totalPayment = data?.length || 0; // Đảm bảo không lỗi nếu data undefined


  const handleRowClick = (data) => {
    navigate(`detail/${data._id}`); // Điều hướng tới trang chi tiết với `id`
  };
  return (
    <>
      <Helmet>
        <title>Hóa đơn</title>
      </Helmet>
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <div className="flex flex-col mt-6 w-full text-neutral-900 max-md:max-w-full">
        <div className="text-right max-md:max-w-full">
          Tổng số hóa đơn: {totalPayment}
        </div>
      </div>
      <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
        <TableHeader />
        {data && data.length > 0 && data.map((pay, index) => (
          <PaymentRow
            key={index}
            pay={pay}
            onRowClick={handleRowClick}
          />
        ))}
      </div>
    </div>
  </> 
  );
}

export default PaymentTable;