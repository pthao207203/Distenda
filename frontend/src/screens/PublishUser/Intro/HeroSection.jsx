import React from 'react';
import InfoCards from './InfoCards'; 

function HeroSection() {
  return (
    <section
      className="flex relative flex-col items-start mt-5 max-w-full md:container"
      style={{
        padding: '0', 
        marginBottom: '0',
      }}
    >
      <div className="flex flex-col w-full-[680px] max-w-lg lg:ml-[100px] max-md:ml-[5px] max-md:container">
        <h2 className="flex justify-left items-left max-w-full text-[60px] font-medium leading-[90px] w-[589px] max-md:text-4xl max-md:leading-[67px] ">
        CHỌN IT, CHỌN ĐỂ DẪN ĐẦU
        </h2>
        <p className="flex py-[20px] items-end w-full text-[32px] font-semibold leading-100 max-md:max-w-full max-md:text-xl">
          Với khóa học chuyên sâu, lộ trình rõ ràng và giảng viên tận tâm, chúng tôi đồng hành cùng bạn trên hành trình trở thành chuyên gia IT!
        </p>
      </div>
      <button className="flex gap-10 justify-center items-center px-10 py-3 mt-2 text-xl border-0 font-semibold  text-black bg-[#CFF500] lg:ml-[100px] max-md:ml-[5px]">
        Bắt đầu
      </button>
      <div className="lg:ml-[100px] max-md:ml-[5px] max-md:container">
        <InfoCards />
      </div>

    </section>
  );
}

export default HeroSection;
