import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Header({setHeight}) {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation(); // Lấy URL hiện tại

  useEffect(() => {
    // Cập nhật activeLink dựa trên URL hiện tại
    const currentPath = location.pathname;
    const pathToLink = {
      '/': 'home',
      '/login': 'login',
      '/register': 'register',
      '/help': 'help',
    };
    setActiveLink(pathToLink[currentPath] || '');
  }, [location]); // Gọi lại mỗi khi URL thay đổi

  const headerRefPublic = useRef(null);
  useEffect(() => {
    if (headerRefPublic.current) {
      setHeight(headerRefPublic.current.offsetHeight); // Truyền chiều cao của header qua props
    }
  }, [headerRefPublic, setHeight]);

  return (
    <header 
      ref={headerRefPublic}
      className="bg-[url('../Image/BG.png')] bg-cover bg-center bg-fixed fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-[40px] "
    >
      <div className="flex gap-3 items-center justify-between px-[60px] py-3 text-white">
        <div className="text-6xl uppercase font-['Squada One']">
          <h1 className="gap-2.5 self-stretch my-auto max-md:text-4xl">Distenda</h1>
        </div>

        <nav className="flex gap-[30px] items-center text-xl font-semibold text-center max-md:text-lg overflow-x-auto scrollbar-hide" style={{ whiteSpace: "nowrap" }}>
          <Link
            to="/"
            className={`px-3 py-3 ${activeLink === 'home' ? 'bg-[#CFF500] text-black' : ''}`}
            onClick={() => setActiveLink('home')}
          >
            Về chúng tôi
          </Link>
          <Link
            to="/login"
            className={`px-3 py-3 ${activeLink === 'login' ? 'bg-[#CFF500] text-black' : ''}`}
            onClick={() => setActiveLink('login')}
          >
            Đăng nhập
          </Link>
          <Link
            to="/register"
            className={`px-3 py-3 ${activeLink === 'register' ? 'bg-[#CFF500] text-black' : ''}`}
            onClick={() => setActiveLink('register')}
          >
            Đăng ký
          </Link>
          <Link
            to="/help"
            className={`px-3 py-3 ${activeLink === 'help' ? 'bg-[#CFF500] text-black' : ''}`}
            onClick={() => setActiveLink('help')}
          >
            Trợ giúp
          </Link>
        </nav>
      </div>
    </header>
  );
}
