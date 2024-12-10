import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <header className="flex items-center justify-between px-10 w-full text-6xl uppercase whitespace-nowrap bg-indigo-50 text-blue-950 max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <div className="flex items-center">
          <img
            loading="lazy"
            src="./logo1.svg"
            alt="Logo"
            className="object-contain w-[200px] h-auto max-md:w-[150px]"
          />
        </div>
        <div className="relative flex items-center">
          {/* Profile Icon */}
          <img
            loading="lazy"
            src="./profile.svg"
            alt="Profile"
            className="object-contain w-[75px] h-auto cursor-pointer"
            onClick={toggleDropdown}
          />
          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div
              className="absolute top-[100%] right-0 mt-2 w-[250px] bg-white border border-gray-300 rounded-lg shadow-md z-50"
              onMouseLeave={closeDropdown} // Tự động đóng khi chuột rời
            >
              <ul className="flex flex-col py-2">
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-xl">
                  <Link to="/admin-account">Tài khoản</Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-xl">
                  <Link to="/banner">Banner</Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-xl text-red-600">
                  <Link to="/logout">Đăng xuất</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
