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
      <div className="flex flex-col w-full max-w-lg lg:ml-[20%] max-md:ml-[5px]">
        <h2 className="flex gap-3 justify-left px-3 items-left max-w-full text-6xl font-medium leading-[90px] w-[589px] max-md:text-4xl max-md:leading-[67px]">
          CHỌN IT, CHỌN ĐỂ DẪN ĐẦU
        </h2>
        <p className="flex gap-3 items-end px-3 py-5 w-full text-3xl font-semibold leading-8 max-md:max-w-full max-md:text-xl">
          Với khóa học chuyên sâu, lộ trình rõ ràng và giảng viên tận tâm, chúng tôi đồng hành cùng bạn trên hành trình trở thành chuyên gia IT!
        </p>
      </div>
      <button className="flex gap-3 justify-right items-center px-5 py-4 mt-2 text-xl border-0 font-semibold leading-none text-black bg-yellow-400 min-h-[50px] lg:ml-[21%] max-md:ml-[20px]">
        Bắt đầu
      </button>
      <div className="lg:ml-[20%] max-md:ml-[5px] max-md:container ">
        <InfoCards />
      </div>
    </section>
  );
}

export default HeroSection;
