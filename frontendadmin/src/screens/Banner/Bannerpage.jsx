import * as React from "react";
import SearchBar from "./../../layouts/private/SearchBar";
import TableHeader from "./components/TableHeader";
import BannerRow from "./components/BannerRow";

function BannerList() {
  const banners = [
    {
      id: 1,
      name: "HTML cơ bản",
      linkedCourse: "HTML cơ bản"
    },
    {
      id: 2,
      name: "HTML cơ bản",
      linkedCourse: "HTML cơ bản"
    }
  ];

  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
        <div className="text-right max-md:max-w-full">
          Tổng số banner: {banners.length}
        </div>
        <TableHeader />
        {banners.map((banner) => (
          <BannerRow
            key={banner.id}
            id={banner.id}
            name={banner.name}
            linkedCourse={banner.linkedCourse}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerList;