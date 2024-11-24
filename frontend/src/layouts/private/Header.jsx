import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { headerController } from "../../controllers/home.controller"

export default function Header() {
  const [activeLink, setActiveLink] = useState('');

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
      console.log("result", result)
      setData(result);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  console.log("category ", data.category)
  console.log("setting ", data.setting)

  return (
    <header className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed fixed top-0 left-0 w-full z-50 bg-white/10">
      <div className="flex gap-3 items-center justify-between px-[60px] py-3 text-white">
        <div className="text-6xl uppercase font-['Squada One']">
          <img src={data.setting.WebsiteLogoUser} alt={data.setting.WebsiteName} />
          {/* <h1 className="gap-2.5 self-stretch my-auto max-md:text-4xl">Distenda</h1> */}
        </div>

        <nav className="flex gap-[30px] items-center text-xl font-semibold text-center max-md:text-lg overflow-x-auto scrollbar-hide" style={{ whiteSpace: "nowrap" }}>
          <Link
            to="/"
            className={`px-3 py-3 ${activeLink === 'home' ? 'bg-[#CFF500]' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Trang chủ
          </Link>
          {data.category.map((cate) => (
            <Link
              to={`/category/${cate.CategorySlug}`}
              className={`px-3 py-3 ${activeLink === `/${cate.CategorySlug}` ? 'bg-[#CFF500]' : ''}`}
              onClick={() => handleLinkClick(`/${cate.CategorySlug}`)}
            >
              {cate.CategoryName}
            </Link>
          ))}
        </nav>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/da8c56b0ed0ce20e86a4d83e849aa87e45d5e1b3c3272d9e0917e05086937c46?placeholderIfAbsent=true&apiKey=1c8ec17ce6334045a3dd3a0f791508d6"
          alt="Logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.34] w-[75px]"
        />
      </div>
    </header>
  );
}
