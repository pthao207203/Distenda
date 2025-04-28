import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerController } from "../../controllers/home.controller";

export default function Header({ setHeight }) {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation(); // Lấy URL hiện tại

  const [loading, setLoading] = useState(false);
  let [data, setData] = useState({
    category: [],
    setting: [],
  });

  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      console.log("result", result);
      setData(result);
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Cập nhật activeLink dựa trên URL hiện tại
    const currentPath = location.pathname;
    const pathToLink = {
      "/": "home",
      "/login": "login",
      "/register": "register",
      "/help": "help",
    };
    setActiveLink(pathToLink[currentPath] || "");
  }, [location]); // Gọi lại mỗi khi URL thay đổi

  const headerRefPublic = useRef(null);
  useEffect(() => {
    if (headerRefPublic.current) {
      setHeight(headerRefPublic.current.offsetHeight); // Truyền chiều cao của header qua props
    }
  }, [headerRefPublic, setHeight]);

  if (loading) {
    return <div>Đang tải...</div>;
  }
  console.log("category ", data.category);
  console.log("setting ", data.setting);

  return (
    <header
      ref={headerRefPublic}
      className="bg-[url('/Image/BG.png')] bg-cover bg-center bg-fixed fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-[40px] "
    >
      <div className="flex items-start justify-stretch px-[20px] py-3 text-white">
        {/* Logo */}
        <div
          style={{ flexBasis: "auto", textAlign: "center" }}
          className="flex self-center max-lg:pr-[40px]"
        >
          <img
            src={data?.setting?.WebsiteLogoUser}
            alt={data?.setting?.WebsiteName}
            className="w-[10rem] max-lg:w-[100px]"
          />
        </div>

        <nav
          className="flex flex-1 h-full gap-[30px] items-center justify-end text-[1.25rem] max-lg:text-[14px] font-semibold text-center overflow-x-auto scrollbar-hide"
          style={{ whiteSpace: "nowrap" }}
        >
          <Link
            to="/"
            className={`px-3 py-3 ${
              activeLink === "home" ? "bg-[#CFF500] text-black" : ""
            }`}
            onClick={() => setActiveLink("home")}
          >
            Về chúng tôi
          </Link>
          <Link
            to="/login"
            className={`px-3 py-3 ${
              activeLink === "login" ? "bg-[#CFF500] text-black" : ""
            }`}
            onClick={() => setActiveLink("login")}
          >
            Đăng nhập
          </Link>
          <Link
            to="/register"
            className={`px-3 py-3 ${
              activeLink === "register" ? "bg-[#CFF500] text-black" : ""
            }`}
            onClick={() => setActiveLink("register")}
          >
            Đăng ký
          </Link>
          <Link
            to="/help"
            className={`px-3 py-3 ${
              activeLink === "help" ? "bg-[#CFF500] text-black" : ""
            }`}
            onClick={() => setActiveLink("help")}
          >
            Trợ giúp
          </Link>
        </nav>
      </div>
    </header>
  );
}
