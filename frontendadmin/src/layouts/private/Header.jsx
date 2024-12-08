import React, { useState, useEffect, useRef } from 'react';
import { headerController } from "../../controllers/home.controller"

export default function Header({setHeaderHeight}) {
  //const [openDetails, setOpenDetails] = useState(false);

  // const toggleTaskBar = () => {
  //   setOpenDetails(!openDetails); // Đảo trạng thái openDetails
  //   handleTaskBarToggle();
  // };
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
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight); // Truyền chiều cao của header qua props
    }
  }, [headerRef, setHeaderHeight]);

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
        className="flex flex-shrink sticky top-0 z-50 items-center justify-between px-10 w-full text-6xl uppercase whitespace-nowrap bg-indigo-50 text-blue-950 max-md:px-5 max-md:max-w-full max-md:text-4xl"
      >
        <div className="flex items-center p-3">
          <img loading="lazy" src="./logo1.svg" alt="Logo"
            className="object-contain w-[200px] h-auto max-md:w-[150px]"
          />
        </div>
        <div className="flex items-center">
          <img loading="lazy" src="./profile.svg" alt="Profile"
            className="object-contain w-[56px] h-auto"
          />
        </div>
      </header>
  );
}
