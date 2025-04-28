import * as React from "react";

function SearchBar({ onSearch = () => {} }) {   // Nhận prop onSearch
  const handleChange = (e) => {
    onSearch(e.target.value);   // Gọi hàm khi nhập ký tự
  };

  return (
    <form className="flex items-start w-full text-[#14375F] max-md:max-w-full" role="search" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-wrap gap-3 items-center px-3 py-4 bg-[#D6E4F6] min-h-[60px] min-w-[240px] rounded-[100px] w-full max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/d65b3dbcd183bd0bf43e39ea99d6c9cc3223e800f0d05d6efe18b8c004e9ec5b?apiKey=ce9d43b270ae41158192dec03af70a1a&"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          alt="search-icon"
        />
        <label htmlFor="searchInput" className="sr-only">Tìm kiếm</label>
        <input
          type="search"
          id="searchInput"
          className="flex-1 gap-2.5 self-stretch my-auto bg-transparent border-none outline-none"
          placeholder="Tìm kiếm"
          onChange={handleChange}     // Lắng nghe sự kiện nhập
        />
      </div>
    </form>
  );
}

export default SearchBar;
