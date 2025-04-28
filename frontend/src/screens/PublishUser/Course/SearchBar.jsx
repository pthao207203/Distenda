import * as React from "react";

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <form className="flex gap-3 items-center p-3 w-full bg-white bg-opacity-10 mx-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/f6c73171a63127d394febbcdfc2b1261f50f5f8704511a4191564fd6f1d68295?apiKey=1914b3001bed44e2a53adf842ab19f47&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
      />
      <label htmlFor="search" className="sr-only">
        Tìm kiếm
      </label>
      <input
        type="search"
        id="search"
        onChange={handleChange}   // Thêm sự kiện onChange
        className="flex-1 gap-2.5 self-stretch my-auto bg-transparent text-xl max-lg:text-[16px] font-medium text-white text-opacity-80 outline-none"
        placeholder="Tìm kiếm khóa học"
      />
    </form>
  );
}

export default SearchBar;
