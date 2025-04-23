import React, { useState, useEffect } from "react";
import { headerController } from "../../controllers/home.controller";

function Footer() {
  let [data, setData] = useState({
    category: [],
    setting: [],
  });
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
    return <div>Đang tải...</div>;
  }
  // console.log("category ", data.category)
  // console.log("setting ", data.setting)
  return (
    <footer className="flex flex-col px-40 py-10 w-full bg-[#131313] max-lg:p-[20px] max-lg:max-w-full">
      <div className="self-center justify-between w-full max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col">
          <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col w-full text-white max-lg:mt-10 max-lg:max-w-full">
              <h2 className="flex flex-wrap gap-1.5 justify-center items-center self-start text-[3.75rem] uppercase whitespace-nowrap max-lg:text-[30px]">
                {data?.setting?.WebsiteName}
              </h2>
              <address className="flex flex-col mt-8 self-stretch space-y-5 text-[1.125rem] max-lg:text-[14px] max-lg:max-w-full font-normal not-italic ">
                <p>Điện thoại: {data?.setting?.WebsitePhone}</p>
                <p>Email: {data?.setting?.WebsiteEmail}</p>
                <p>
                  Địa chỉ: Khu phố 6, đường Hàn Thuyên, phường Linh Trung, TP.
                  Thủ Đức, TP. Hồ Chí Minh
                </p>
              </address>
            </div>
          </div>

          <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-wrap justify-around mt-10 text-[1.125rem] max-lg:text-[14px] leading-loose text-center text-white max-lg:mt-0 max-lg:justify-center max-lg:self-center">
              <nav className="flex self-center overflow-hidden flex-col py-auto my-auto">
                <h3 className=" font-semibold tracking-tight leading-tight text-white uppercase text-[1.5rem] max-lg:text-[18px]">
                  VỀ CHÚNG TÔI
                </h3>
                <a
                  href="#about"
                  className="overflow-hidden px-16 py-1 mt-4 w-full max-lg:px-5"
                >
                  Giới thiệu
                </a>
                <a
                  href="#careers"
                  className="overflow-hidden px-16 py-1 mt-4 w-full max-lg:px-5"
                >
                  Tuyển dụng
                </a>
              </nav>
              <nav className="flex self-center items-center overflow-hidden flex-col py-auto my-auto ">
                <h3 className="font-semibold tracking-tight leading-tight text-white uppercase text-[1.5rem] max-lg:text-[18px]">
                  RESOURCE
                </h3>
                <a
                  href="#privacy"
                  className="overflow-hidden px-7 py-1 mt-4 w-full max-lg:px-5"
                >
                  Chính sách bảo mật
                </a>
                <a
                  href="#support"
                  className="overflow-hidden px-16 py-1 mt-4 w-full max-lg:px-5"
                >
                  Hỗ trợ
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 self-stretch justify-between mt-[8px] w-full text-[0.875rem] max-lg:text-[12px] leading-none text-[#cff500] text-[0.875rem] max-w-[1476px] max-lg:max-w-full">
          <p className="gap-2.5 self-center">
            {data?.setting?.WebsiteCopyright}
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98921d5daae90f6f4a3fc04bb88f688153fe50734fb9b62e98ffbeb5b77599b6?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
            alt="Social media icons"
            className="object-contain shrink-0 max-w-full rounded-none aspect-[4.03] w-[145px]"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
