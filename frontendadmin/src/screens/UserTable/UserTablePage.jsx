import * as React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../layouts/private/SearchBar";
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
  const navigate = useNavigate(); // Sử dụng hook điều hướng

  const handleRowClick = (id) => {
    navigate(`/user-details/${id}`); // Điều hướng tới trang chi tiết với `id`
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <div className="flex flex-col justify-center items-center pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
        <TableHeader />
        {userData.map((user, index) => (
          <TableRow
            key={index}
            {...user}
            onRowClick={handleRowClick} // Truyền hàm `onRowClick`
          />
        ))}
      </div>
    </div>
  );
}

export default UserTable;
