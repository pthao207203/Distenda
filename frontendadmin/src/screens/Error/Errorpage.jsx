import * as React from "react";
import { IconContainer } from "./components/IconContainer";
import { ErrorImage } from "./components/ErrorImage";

function ErrorPage() {
  return (
    <div className="relative">
      {/* Icon nằm ở góc (dùng absolute trong IconContainer) */}
      <IconContainer
        iconSrc="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/4fdbac352c7eb5dafe9848f1cfe3002de18a7d68d156fe91fbf794594f15b1c9?apiKey=ce9d43b270ae41158192dec03af70a1a&"
        iconAlt="Error icon"
      />

      <div
        className="flex flex-col items-center pt-9 pr-20 pb-96 pl-9 bg-white max-md:px-5 max-md:pb-24"
        role="main"
        aria-labelledby="error-heading"
      >
        <ErrorImage
          imageSrc="/404page.png"
          imageAlt="404 error illustration"
        />
        <h1 id="error-heading" className="mt-2.5 text-xl text-black">
          Không tìm thấy trang.
        </h1>
      </div>
    </div>
  );
}

export default ErrorPage;
