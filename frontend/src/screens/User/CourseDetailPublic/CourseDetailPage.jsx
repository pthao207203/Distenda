import React, { useState } from "react";
import CourseContent from "./CourseContent";
import PageNav from "./PageNav"
import LoginRequest from "../CourseDetailPublic/LoginRequest";
import CheckoutPage from "../Payment/CheckoutPage";
import Bank from "../Payment/Bank";
import ThankYouPage from "../Payment/ThankYouPage";
import Cookies from 'js-cookie';

export default function CourseDetailPage() {
  const [isLoginRequestVisible, setIsLoginRequestVisible] = useState(false);

  const handleOpenLoginRequest = () => {
    setIsLoginRequestVisible(true)
  };

  const handleCloseLoginRequest = () => {
    setIsLoginRequestVisible(false);
  };
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);

  const handleOpenPayment = () => {
    setIsPaymentVisible(true);
    document.body.style.overflow = "hidden";
  };

  const handleClosePayment = () => {
    setIsPaymentVisible(false);
    document.body.style.overflow = "auto";
  };

  const [isBankVisible, setIsBankVisible] = useState(false);

  const handleOpenBank = () => {
    setIsPaymentVisible(false);
    setIsBankVisible(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseBank = () => {
    setIsBankVisible(false);
    document.body.style.overflow = "auto";
  };
  const [isThankVisible, setIsThankVisible] = useState(false);

  const handleOpenThank = () => {
    setIsPaymentVisible(false);
    setIsBankVisible(false);
    setIsThankVisible(true)
    document.body.style.overflow = "hidden";
  };

  const handleCloseThank = () => {
    setIsThankVisible(false);
    document.body.style.overflow = "auto";
  };

  const token = Cookies.get('user_token'); // Lấy token từ cookie
  const isAuthenticated = token !== undefined; // Kiểm tra xem token có tồn tại không

  return (
    <div className="flex flex-col relative w-full h-full overflow-y-auto">
      <PageNav />
      {/* CourseContent nhận hàm handleOpenPayment */}
      <CourseContent onRegister={isAuthenticated ? handleOpenPayment : handleOpenLoginRequest} />

      {/* Nếu đã đăng nhập, hiển thị Payment overlay */}
      {isAuthenticated && isPaymentVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <CheckoutPage handleOpenBank={handleOpenBank} onClose={handleClosePayment} />
        </div>
      )}

      {/* Nếu có Bank overlay */}
      {isBankVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <Bank handleConfirm={handleOpenThank} onClose={handleCloseBank} />
        </div>
      )}

      {/* Nếu có ThankYou overlay */}
      {isThankVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <ThankYouPage onClose={handleCloseThank} />
        </div>
      )}

      {/* Nếu chưa đăng nhập, hiển thị LoginRequest overlay */}
      {!isAuthenticated && isLoginRequestVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <LoginRequest onClose={handleCloseLoginRequest} />
        </div>
      )}
    </div>
  );
}