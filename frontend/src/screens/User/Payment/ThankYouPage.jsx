import * as React from "react";

function ThankYouPage({onClose}) {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center p-10 text-2xl font-medium leading-6 text-black bg-white max-w-[600px] max-md:p-5">
      <button className="justify-end self-end " onClick={onClose}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/18ce7f5d3a0e8a95408a91d7f810fd4a3daa1c23a4824327ff1f5f9f74b720b0?apiKey=1914b3001bed44e2a53adf842ab19f47&"
        alt="Close"
        className="object-contain self-end aspect-[0.94] hover:brightness-110 hover:scale-105 transition duration-200"
      />
      </button>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/0032579ccd4f40c5aad73283cc7045c51358011fcf0dabe482b3831d4c2904ec?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"
        alt=""
        className="object-contain self-center aspect-square"
      />
      <p className="self-center text-left mt-10 max-md:mt-5 max-md:max-w-full">
        Cảm ơn bạn! Thông tin thanh toán sẽ được kiểm tra và thông báo trong vòng 24h tới!
      </p>
    </main>
  );
}

export default ThankYouPage;