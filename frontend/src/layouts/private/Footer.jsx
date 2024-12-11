import React, { useState, useEffect } from 'react';
import { headerController } from "../../controllers/home.controller"

function Footer() {
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

  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  // console.log("category ", data.category)
  // console.log("setting ", data.setting)
  return (
    <footer className="flex flex-col  px-40 py-10 w-full bg-[#131313] max-md:px-5 max-md:pt-5 max-md:max-w-full">
      <div className="self-center justify-between w-full max-md:max-w-full">

        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full text-white max-md:mt-10 max-md:max-w-full">
              <h2 className="flex flex-wrap gap-1.5 justify-center items-center self-start text-6xl uppercase whitespace-nowrap max-md:text-4xl">
                {data?.setting?.WebsiteName}
              </h2>
              <address className="flex flex-col mt-8 self-stretch space-y-5 text-lg max-md:max-w-full font-normal not-italic ">
                <p>Điện thoại: {data?.setting?.WebsitePhone}</p>
                <p>Email: {data?.setting?.WebsiteEmail}</p>
                <p>Địa chỉ: Khu phố 6, đường Hàn Thuyên, phường Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh</p>
              </address>
            </div>
          </div>

          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">

            <div className="flex flex-wrap justify-around mt-10 text-lg leading-loose text-center text-white max-md:mt-0 max-md:justify-start max-md:self-start">
              <nav className="flex self-center overflow-hidden flex-col py-auto my-auto">
                <h3 className=" font-semibold tracking-tight leading-tight text-white uppercase text-[24px]">
                  VỀ CHÚNG TÔI
                </h3>
                <a href="#about" className="overflow-hidden px-16 py-1.5 mt-6 w-full max-md:px-5">Giới thiệu</a>
                <a href="#careers" className="overflow-hidden px-16 py-1.5 mt-6 w-full max-md:px-5">Tuyển dụng</a>
              </nav>
              <nav className="flex self-center overflow-hidden flex-col py-auto my-auto ">
                <h3 className="font-semibold tracking-tight leading-tight text-white uppercase text-[24px]">
                  RESOURCE
                </h3>
                <a href="#privacy" className="overflow-hidden px-7 py-1.5 mt-6 w-full max-md:px-5">Chính sách bảo mật</a>
                <a href="#support" className="overflow-hidden px-16 py-1.5 mt-6 w-full max-md:px-5">Hỗ trợ</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 self-stretch justify-between mt-7 w-full text-sm leading-none text-[#cff500] max-w-[1476px] max-md:max-w-full">
          <p className="gap-2.5 self-start">
            {data?.setting?.WebsiteCopyright}
          </p>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98921d5daae90f6f4a3fc04bb88f688153fe50734fb9b62e98ffbeb5b77599b6?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e" alt="Social media icons" className="object-contain shrink-0 max-w-full rounded-none aspect-[4.03] w-[145px]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;