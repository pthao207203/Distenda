import * as React from "react";
import PaymentRow from "./components/PaymentRow";
import TableHeader from "./components/TableHeader";
import SearchBar from "../../layouts/private/SearchBar";

const paymentData = [
  {
    id: "PAY1234",
    userName: "Đào Thị Hạnh",
    courseCode: "CSS1234",
    price: "2.500.000",
    time: "29/11/2024 23:13",
    status: "pending"
  },
  {
    id: "PAY2345",
    userName: "Lê Thị Dung",
    courseCode: "REACT123",
    price: "4.000.000",
    time: "13/11/2024 13:23",
    status: "paid"
  },
  {
    id: "PAY2345",
    userName: "Lê Thị Dung", 
    courseCode: "REACT123",
    price: "4.000.000",
    time: "13/11/2024 13:23",
    status: "paid"
  },
  {
    id: "PAY1234",
    userName: "Đào Thị Hạnh",
    courseCode: "CSS1234", 
    price: "2.500.000",
    time: "29/11/2024 23:13",
    status: "pending"
  },
  {
    id: "PAY2345",
    userName: "Lê Thị Dung",
    courseCode: "REACT123",
    price: "4.000.000", 
    time: "13/11/2024 13:23",
    status: "paid"
  },
  {
    id: "PAY2345",
    userName: "Lê Thị Dung",
    courseCode: "REACT123",
    price: "4.000.000",
    time: "13/11/2024 13:23",
    status: "paid"
  },
  {
    id: "PAY2345",
    userName: "Lê Thị Dung",
    courseCode: "REACT123",
    price: "4.000.000",
    time: "13/11/2024 09:14",
    status: "cancelled"
  },
  {
    id: "PAY2345",
    userName: "Lê Thị Dung",
    courseCode: "REACT123",
    price: "4.000.000",
    time: "13/11/2024 09:14",
    status: "cancelled"
  },
  {
    id: "PAY2345",
    userName: "Lê Thị Dung",
    courseCode: "REACT123",
    price: "4.000.000",
    time: "13/11/2024 13:23",
    status: "paid"
  }
];

function PaymentTable() {
  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
        <TableHeader />
        {paymentData.map((payment, index) => (
          <PaymentRow key={index} {...payment} />
        ))}
      </div>
    </div>
  );
}

export default PaymentTable;