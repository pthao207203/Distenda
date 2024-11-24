import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed fixed top-0 left-0 w-full z-50 bg-white/10">
      <div className="flex gap-3 items-center justify-between px-[60px] py-3 text-white">
        <div className="text-6xl uppercase font-['Squada One']">
          <h1 className="gap-2.5 self-stretch my-auto max-md:text-4xl">Distenda</h1>
        </div>

        <nav className="flex gap-[30px] items-center text-xl font-semibold text-center max-md:text-lg overflow-x-auto scrollbar-hide" style={{ whiteSpace: "nowrap" }}>
          <Link
            to="/"
            className={`px-3 py-3 ${activeLink === 'home' ? 'bg-[#CFF500]' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Về chúng tôi
          </Link>
          <Link
            to="/login"
            className={`px-3 py-3 ${activeLink === 'login' ? 'bg-[#CFF500]' : ''}`}
            onClick={() => handleLinkClick('login')}
          >
            Đăng nhập
          </Link>
          <Link
            to="/register"
            className={`px-3 py-3 ${activeLink === 'register' ? 'bg-[#CFF500]' : ''}`}
            onClick={() => handleLinkClick('register')}
          >
            Đăng ký
          </Link>
          <Link
            to="/help"
            className={`px-3 py-3 ${activeLink === 'help' ? 'bg-[#CFF500]' : ''}`}
            onClick={() => handleLinkClick('help')}
          >
            Trợ giúp
          </Link>
        </nav>
      </div>
    </header>
  );
}
