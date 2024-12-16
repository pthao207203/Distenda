import React, { useState, useEffect } from "react";
import CustomerInfo from './components/CustomerInfo';
import OrderTable from './components/OrderTable';
import { useParams } from "react-router-dom";
import { payDetailController } from "../../controllers/pay.controller";
import Loading from "../../components/Loading"; 

function InvoiceDetails() {
  const { _id } = useParams(); // Lấy giá trị _id từ URL
  console.log("ID from URL: ", _id);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // console.log("vao")
      const result = await payDetailController(_id,setLoading);
      console.log("Result from payDetailController: ", result);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
    }, [_id]);

    if (loading) {
      return (
        <Loading />
      )
    }
    console.log("PayDetail => ", data)

  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
      {data?.user && <CustomerInfo data={data} />}
      {data?.course && <OrderTable items={[data.course]} />}
    </div>
  );
}

export default InvoiceDetails;