import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import UserForm from "./UserForm";

export default function CheckoutPage({
  onClose,
  ...course
}) {

  const productDetails = {
    title: `${course.CourseName}`,
    duration: `${course.CourseDuration} tháng`,
    price: course.CoursePrice === 0 ? "Miễn phí" : (course.CoursePrice * (100 - course.CourseDiscount) / 100).toLocaleString('vi-VN'),
    imageUrl: `${course.CoursePicture}`
  };

  const userDetails = {
    fullName: `${course?.user?.UserFullName || "Không có"}`,
    email: `${course?.user?.UserEmail || ""}`,
    phone: `${course?.user?.UserPhone || ""}`
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/pay/${course.CourseSlug}/momo`, {}, {
          withCredentials: true
        } // Cho phép gửi cookie kèm theo request
      );

      if (response.data.code === 200) {
        window.location.href = response.data.payUrl;
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Lỗi thanh toán MoMo:", error);
      alert("Thanh toán MoMo thất bại, vui lòng thử lại!");
    }
  };

  return (
    <main className="flex overflow-hidden flex-col pt-4 pb-10 bg-white max-w-[803px] p-6 shadow-lg w-full max-h-[90vh] overflow-y-auto">
      <button className="justify-end self-end " onClick={onClose}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/18ce7f5d3a0e8a95408a91d7f810fd4a3daa1c23a4824327ff1f5f9f74b720b0?apiKey=1914b3001bed44e2a53adf842ab19f47&"
          alt="Close"
          className="object-contain self-end aspect-[0.94] hover:brightness-110 hover:scale-105 transition duration-200"
        />
      </button>
      <div className="flex flex-col px-10 mt-2 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <ProductCard {...productDetails} />
          <p className="mt-4 text-xl font-medium leading-none text-black">
            Tổng giá trị: {productDetails.price}
          </p>
          <div className="flex flex-col mt-4 w-full text-xl font-medium text-neutral-900">
            <label htmlFor="discountCode">Mã giảm giá</label>
            <input
              type="text"
              id="discountCode"
              className="flex gap-2.5 px-2 py-2 mt-2 bg-[#EBF1F9] min-h-[38px] w-2/3"
            />
          </div>
          <p className="mt-4 text-xl font-medium leading-none text-black">
            Thành tiền: {productDetails.price}
          </p>
          <UserForm userDetails={userDetails} />
        </div>
        <button onClick={handlePayment} className="flex gap-3 justify-center items-center self-center px-3 py-4 mt-9 text-xl font-medium text-white bg-neutral-900 w-[272px]">
          <span>Đăng ký</span>
        </button>
      </div>
    </main>
  );
}
