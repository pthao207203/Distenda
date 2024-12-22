import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { headerController } from "../../controllers/home.controller"
import Loading from '../../components/Loading';

export default function Header({ setHeaderHeight, handleTaskBarToggle }) {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation(); // Theo dõi URL hiện tại
  const [openDetails, setOpenDetails] = useState(false);

  const toggleTaskBar = () => {
    setOpenDetails(!openDetails); // Đảo trạng thái openDetails
    handleTaskBarToggle();
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  let [data, setData] = useState(
    {
      category: [],
      setting: [],
    }
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      // console.log("result", result)
      setData(result);
    }

    fetchData();
  }, []);

  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight); // Truyền chiều cao của header qua props
    }
  }, [headerRef, setHeaderHeight]);

  useEffect(() => {
    const currentPath = location.pathname;

    // Cập nhật `activeLink` dựa trên URL
    if (currentPath === "/courses" || currentPath.startsWith("/category/")) {
      setActiveLink(currentPath);
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);


  if (loading) {
    return (
      <Loading />
    )
  }
  // console.log("category ", data.category)
  // console.log("setting ", data.setting)

  return (
    <header
      ref={headerRef}
      className="bg-[url('/Image/BG.png')] bg-cover bg-center bg-fixed fixed top-0 left-0 w-full z-50 backdrop-blur-[40px]"
    >
      <div className="flex items-center justify-between px-[60px] py-3 text-white lg:gap-5 max-md:pr-[20px] ">
        {/* Logo */}
        <div
          style={{ flexBasis: "auto", textAlign: "center" }}
        >
          <img
            src={data?.setting?.WebsiteLogoUser}
            alt={data?.setting?.WebsiteName}
            className="w-auto h-auto "
          />
        </div>

        {/* Navigation */}
        <nav
          className="flex items-center text-2xl font-semibold text-center overflow-x-auto scrollbar-hide max-md:text-[1.2rem] ml-3.5"
          style={{ flexBasis: "85%", whiteSpace: "nowrap" }}
        >
          <Link
            to="/courses"
            className={`flex-1 px-3 py-3 ${activeLink === "/courses" ? "bg-[#CFF500] text-black" : ""
              }`}
            onClick={() => handleLinkClick("/courses")}
          >
            Trang chủ
          </Link>
          {data.category.map((cate) => (
            <Link
              key={cate.CategorySlug}
              to={`/category/${cate.CategorySlug}`}
              className={`flex-1 px-3 py-3 ${activeLink === `/category/${cate.CategorySlug}`
                ? "bg-[#CFF500] text-black"
                : ""
                }`}
              onClick={() => handleLinkClick(`/category/${cate.CategorySlug}`)}
            >
              {cate.CategoryName}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <div
          className="flex grow flex-row items-center"
          style={{ flexBasis: "auto", justifyContent: "flex-end" }}
        >
          <button onClick={toggleTaskBar} className="flex items-center shrink gap-2">
            <img
              loading="lazy"
              src={
                data.setting.user?.UserAvatar
                  ? data.setting.user.UserAvatar
                  : "https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/2b926db059289d5c08128dea3316455c4081d26d19035d156f09a2e2fbe1385b?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"
              }
              alt=""
              className="object-cover shrink-0 w-14 rounded-full aspect-square"
            />
            <img
              loading="lazy"
              src={`/Icon/${openDetails ? "tam_giac2" : "tam_giac"}.svg`}
              alt=""
              className="object-center shrink-0 w-[15px] aspect-[2.14]"
            />
          </button>
        </div>
      </div>
    </header>

  );
}
