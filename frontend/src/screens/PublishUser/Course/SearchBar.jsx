import * as React from "react";

function SearchBar() {
  return (
    <form className="flex flex-wrap gap-3 items-center p-3 w-full bg-white bg-opacity-10 mx-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/f6c73171a63127d394febbcdfc2b1261f50f5f8704511a4191564fd6f1d68295?apiKey=1914b3001bed44e2a53adf842ab19f47&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
      />
      <label htmlFor="search" className="sr-only">Tìm kiếm</label>
      <input
        type="search"
        id="search"
        className="flex-1 gap-2.5 self-stretch my-auto bg-transparent text-xl font-medium text-white text-opacity-80 outline-none"
        placeholder="Tìm kiếm"
      />
    </form>
  );
}

export default SearchBar;
