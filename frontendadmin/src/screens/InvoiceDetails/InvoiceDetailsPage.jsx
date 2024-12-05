import React from 'react';
import CustomerInfo from './components/CustomerInfo';
import OrderTable from './components/OrderTable';

function InvoiceDetails() {
  const customerData = {
    name: "Lê Thị Dung",
    transactionId: "87x789zKL",
    time: "19:30",
    date: "20/10/2023",
    userId: "USE1234",
    paymentCode: "HDFK234H"
  };

  const orderItems = [
    { courseId: "HTML2024", courseName: "HTML cơ bản", price: "23.000.000" },
    { courseId: "HTML2024", courseName: "HTML cơ bản", price: "23.000.000" },
    { courseId: "HTML2024", courseName: "HTML cơ bản", price: "23.000.000" }
  ];

  return (
    <div className="flex flex-col grow shrink px-16 pt-16 pb-60 bg-white min-w-[240px] w-[1347px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <CustomerInfo data={customerData} />
      <OrderTable items={orderItems} />
    </div>
  );
}

export default InvoiceDetails;