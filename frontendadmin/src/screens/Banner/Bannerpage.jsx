import React, { useState, useEffect } from "react";
import SearchBar from "./../../layouts/private/SearchBar";
import TableHeader from "./components/TableHeader";
import BannerRow from "./components/BannerRow";
import { bannersController } from "../../controllers/banner.controller";

function BannerList() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      const result = await bannersController(setLoading);
      // console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  console.log("banner => ", data)

  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
        <div className="text-right max-md:max-w-full">
          Tổng số banner: {data?.length}
        </div>
        <TableHeader />
        {data && data.length > 0 && data.map((banner, index) => (
          <BannerRow
            key={index}
            id={banner._id}
            index={index + 1}
            name={banner.BannerName}
            linkedCourse={banner.course.CourseName}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerList;