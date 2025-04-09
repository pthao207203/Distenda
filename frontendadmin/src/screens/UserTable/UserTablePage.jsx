<<<<<<< HEAD
import * as React from "react";
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

const userData = [
  {
    id: "USE1234",
    name: "Lê Thị Dung",
    joinDate: "13/11/2024 09:14",
    revenue: "4.000.000",
    lastUpdate: "13/11/2024 09:14"
  },
  {
    id: "USE1234",
    name: "Lê Thị Dung", 
    joinDate: "13/11/2024 09:14",
    revenue: "4.000.000",
    lastUpdate: "13/11/2024 09:14"
  },
  {
    id: "USE1234",
    name: "Lê Thị Dung",
    joinDate: "13/11/2024 09:14", 
    revenue: "4.000.000",
    lastUpdate: "13/11/2024 09:14"
  },
  {
    id: "USE1234",
    name: "Lê Thị Dung",
    joinDate: "13/11/2024 09:14",
    revenue: "4.000.000", 
    lastUpdate: "13/11/2024 09:14"
  },
  {
    id: "USE1234",
    name: "Lê Thị Dung",
    joinDate: "13/11/2024 09:14",
    revenue: "4.000.000",
    lastUpdate: "13/11/2024 09:14"
  },
  {
    id: "USE1234",
    name: "Lê Thị Dung",
    joinDate: "13/11/2024 09:14",
    revenue: "4.000.000",
    lastUpdate: "13/11/2024 09:14"
  },
  {
    id: "USE1234",
    name: "Lê Thị Dung",
    joinDate: "13/11/2024 09:14",
    revenue: "4.000.000",
    lastUpdate: "13/11/2024 09:14"
  },
  {
    id: "USE1234",
    name: "Lê Thị Dung",
    joinDate: "13/11/2024 09:14",
    revenue: "4.000.000",
    lastUpdate: "13/11/2024 09:14"
  },
  {
    id: "USE1234",
    name: "Lê Thị Dung",
    joinDate: "13/11/2024 09:14",
    revenue: "4.000.000",
    lastUpdate: "13/11/2024 09:14"
  }
];

function UserTable() {
  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
        <TableHeader />
        {userData.map((user, index) => (
          <TableRow key={index} {...user} />
        ))}
      </div>
    </div>
  );
}

export default UserTable;
=======
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import SearchBar from "../../layouts/private/SearchBar";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import { usersController } from "../../controllers/user.controller";
import Loading from "../../components/Loading"; 

function UserTable() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      const result = await usersController(setLoading);
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
  console.log("users => ", data)
  const totalUser = data?.length || 0;

  return (
    <>
      <Helmet>
        <title>Người dùng</title>
      </Helmet>
    <div className="flex flex-col flex-1 justify-center items-center shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <div className="flex flex-col mt-6 w-full text-neutral-900 max-md:max-w-full">
        <div className="text-right max-md:max-w-full">
          Tổng số người dùng: {totalUser}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
        <TableHeader />
        {data && data.length > 0 && data.map((user, index) => (
          <TableRow
            key={index}
            {...user}
          />
        ))}
      </div>
    </div>
  </>
  );
}

export default UserTable;
>>>>>>> 0334ef35d2670e87a54dfc56ee5c5e71becc239e
