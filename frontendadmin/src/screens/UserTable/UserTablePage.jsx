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