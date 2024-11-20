import React from 'react';

const courseData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/461185e564abbcabe8a565059033a7552c836cf7cb34770a13288b29d066bd97?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Chuyên viên thiết kế đồ họa & web",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c651f8125d452ea0ce349f8384ba92e10e9e5bef8132e1ed0c250cedc6db7aad?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Data Analytics Certificate",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67414f9ed8f8cc3493bc4c1224dcb669d2f25a151de0cbc054bcac953e0fc938?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Ứng dụng CNTT cơ bản",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a2201ab1d3aaacd3deca64ad983d89b0e4fdf05fd7343080effcb0fcae1cdbb?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Kỹ thuật viên Thiết kế Hệ thống nhận dạng thương hiệu",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaa36daa023884cf26fc4cea6c317cf3450d2e378b07667aa8deb23f7a382bf8?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Thiết kế Giao diện Website toàn phần (Layout UX/UI với Figma + HTML, CSS, JQuery)",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80a292b824d8123307dceca7e5c4b6fce18ef4410b70cf756b94dd1afec8a209?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Trực quan hóa dữ liệu - Data Visualization",
    duration: "120 tiếng",
    price: "10.000.000"
  }
];

function CourseCard({ image, title, duration, price }) {
  return (
    <div className="flex overflow-hidden flex-wrap grow shrink gap-6 justify-center items-center self-stretch px-4 py-2.5 my-auto bg-white bg-opacity-10 min-h-[300px] min-w-[240px] w-[506px] max-md:max-w-full h-full">
      <img loading="lazy" src={image} alt={title} className="object-contain shrink-0 self-stretch my-auto aspect-[1.14] w-[195px]" />
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
        <h3 className="flex gap-3 items-start px-3 py-6 w-full text-3xl font-semibold leading-7 text-white min-h-[100px]">
          <div className="line-clamp-2">
            {title}
          </div>
        </h3>
        <div className="flex flex-col items-start w-full font-medium leading-none">
          <p className="flex gap-3 items-center px-3 max-w-full text-xl text-white min-h-[20px] w-[351px]">
            Thời gian: {duration}
          </p>
          <p className="flex gap-3 items-center px-3 max-w-full h-5 text-3xl text-yellow-400 whitespace-nowrap w-[351px]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}


function CourseSection() {
  return ( 
<section className="relative flex overflow-hidden justify-self-center flex-col w-screen bg-none max-md:max-w-full">

      <div className="flex flex-col mx-auto max-w-[1333px] w-full px-4">
        <div className="text-center mb-5">
          <h2 className="flex gap-3 items-center px-3 py-5 w-full text-xl font-medium leading-none text-white max-w-[1333px] max-md:max-w-full">
            Đề xuất
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-12 mb-5 justify-center w-full">
          {courseData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
      <button className="flex gap-3 justify-center items-center self-center px-1 py-3 mb-3 text-xl font-semibold leading-none text-black bg-yellow-400 w-[331px]">
        Xem tất cả
      </button>
    </section>
  );
}


export default CourseSection;