import React, { useState } from "react";
import CourseContent from "./CourseContent";
import PageNav from "./PageNav"
import CheckoutPage from "../Payment/CheckoutPage"; // Import CheckoutPage


export default function CourseDetailPage() {
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);

  const handleOpenPayment = () => {
    setIsPaymentVisible(true);
  };

  const handleClosePayment = () => {
    setIsPaymentVisible(false);
  };

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <PageNav />
      {/* CourseContent nhận hàm handleOpenPayment */}
      <CourseContent onRegister={handleOpenPayment} />

      {/* Payment overlay */}
      {isPaymentVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 overflow-hidden">
          <CheckoutPage onClose={handleClosePayment} />
      </div>
      )}
      
    </div>
  );
}