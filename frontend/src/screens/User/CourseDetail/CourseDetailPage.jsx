import React, { useState } from "react";
import CourseContent from "./CourseContent";
import PageNav from "./PageNav"
import CheckoutPage from "../Payment/CheckoutPage";
import Bank from "../Payment/Bank";
import ThankYouPage from "../Payment/ThankYouPage";


export default function CourseDetailPage() {
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
  
  return (
    <div className="relative w-full h-full overflow-y-auto">
      <PageNav />
      {/* CourseContent nhận hàm handleOpenPayment */}
      <CourseContent onRegister={handleOpenPayment} />

      {/* Payment overlay */}
      {isPaymentVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
            <CheckoutPage handleOpenBank={handleOpenBank} onClose={handleClosePayment} />
        </div>
      )}

      {isBankVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <Bank handleConfirm={handleOpenThank} onClose={handleCloseBank} />
        </div>
      )}

      {isThankVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <ThankYouPage onClose={handleCloseThank} />
        </div>
      )}
      
    </div>
  );
}