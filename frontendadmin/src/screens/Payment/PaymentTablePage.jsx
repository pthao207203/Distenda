import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import PaymentRow from "./components/PaymentRow";
import TableHeader from "./components/TableHeader";
import SearchBar from "../../layouts/private/SearchBar";
import { payController } from "../../controllers/pay.controller";
import Loading from "../../components/Loading";
import moment from 'moment';

function PaymentTable() {
  const [allPayments, setAllPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Sử dụng hook điều hướng
  useEffect(() => {
    async function fetchData() {
      const result = await payController(setLoading);
      if (result) {
        setAllPayments(result);
        setFilteredPayments(result);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (value) => {
    const keyword = value.toLowerCase();
    const filtered = allPayments.filter(pay => {
      const id = pay._id?.toLowerCase() || "";
      const user = pay.user?.toLowerCase() || "";
      const course = pay.course?.toLowerCase() || "";
      const total = pay.PayTotal?.toString() || "";
      const createdAt = pay.createdBy?.createdAt
        ? moment(pay.createdBy.createdAt).format("DD/MM/YYYY hh:mm:ss")
        : "";
      const statusText = pay.PayStatus === 1
        ? "đã thanh toán"
        : (pay.PayStatus === 0 ? "đã hủy" : "chờ thanh toán");

      return (
        id.includes(keyword) ||
        user.includes(keyword) ||
        course.includes(keyword) ||
        total.includes(keyword) ||
        createdAt.includes(keyword) ||
        statusText.includes(keyword)
      );
    });

    setFilteredPayments(filtered);
  };


  if (loading) {
    return <Loading />;
  }

  const totalPayment = filteredPayments.length;

  const handleRowClick = (pay) => {
    navigate(`detail/${pay._id}`);
  };

  return (
    <>
      <Helmet>
        <title>Hóa đơn</title>
      </Helmet>
      <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-col mt-6 w-full text-neutral-900 max-md:max-w-full">
          <div className="text-right max-md:max-w-full">
            Tổng số hóa đơn: {totalPayment}
          </div>
        </div>
        <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
          <TableHeader />
          {filteredPayments.length > 0 ? (
            filteredPayments.map((pay, index) => (
              <PaymentRow key={index} pay={pay} onRowClick={handleRowClick} />
            ))
          ) : (
            <p className="mt-4 text-center">Không tìm thấy hóa đơn nào.</p>
          )}

        </div>
      </div>
    </>
  );
}

export default PaymentTable;