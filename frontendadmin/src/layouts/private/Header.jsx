import React, { useState, useEffect, useRef } from 'react';
import { headerController } from "../../controllers/home.controller"

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      console.log("result", result)
    }

    fetchData();
  }, []);

  const headerRef = useRef(null);
  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      console.log("Controller result:", result);
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    }
  
    fetchData();
  }, [setLoading, setHeaderHeight]);

  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }

  return (
      <header 
        ref={headerRef}
        className="fixed border-box left top-0 z-50 w-full bg-[#EBF1F9] max-md:max-w-full"
      >
      <div className="flex items-center justify-between px-[60px] max-md:pr-[20px]">
        <div className="flex items-center p-3">
          <img loading="lazy" src="./logo1.svg" alt="Logo"

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
