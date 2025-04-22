import React from "react";
import InfoCards from "./InfoCards";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="flex relative flex-col items-start mt-5 max-w-full md:container"
      style={{
        padding: "0",
        marginBottom: "0",
      }}
    >
      <div className="flex flex-col w-full-[680px] max-w-xl lg:ml-[100px] max-md:ml-[5px] max-md:container">
        <h2 className="flex justify-left items-left max-w-full text-[3.75rem] font-medium leading-[70px] w-[589px] max-md:text-4xl max-md:leading-[67px] ">
          CHỌN IT, CHỌN ĐỂ DẪN ĐẦU
        </h2>
        <p className="flex py-[20px] items-end w-full text-[2rem] font-semibold leading-100 max-md:max-w-full max-md:text-xl">
          Với khóa học chuyên sâu, lộ trình rõ ràng và giảng viên tận tâm, chúng
          tôi đồng hành cùng bạn trên hành trình trở thành chuyên gia IT!
        </p>
      </div>
      <button className="flex gap-10 justify-center items-center px-10 py-2.5 mt-0 text-xl border-0 font-semibold  text-black bg-[#CFF500] lg:ml-[100px] max-md:ml-[5px]">
        <Link to="/login">Bắt đầu</Link>
      </button>
      <div className="lg:ml-[100px] max-md:ml-[5px] max-md:container lg:max-w-[1000px]">
        <InfoCards />
      </div>
    </section>
  );
}

export default HeroSection;
