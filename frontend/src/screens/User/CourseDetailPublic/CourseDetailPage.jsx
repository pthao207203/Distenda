import React, { useState } from "react";
import CourseContent from "./CourseContent";
import PageNav from "./PageNav"
import { LoginRequest } from "../CourseDetailPublic/LoginRequest";


export default function CourseDetailPage() {
  const [isLoginRequestVisible, setIsLoginRequestVisible] = useState(false);

  const handleOpenLoginRequest = () => {
    setIsLoginRequestVisible(true)
  };

  const handleCloseLoginRequest = () => {
    setIsLoginRequestVisible(false);
  };
  
  return (
    <div className="flex flex-col relative w-full h-full overflow-y-auto">
      <PageNav />
      {/* CourseContent nhận hàm handleOpenPayment */}
      <CourseContent onRegister={handleOpenLoginRequest} />

      {/* LoginRequest overlay */}
      {isLoginRequestVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <LoginRequest onClose={handleCloseLoginRequest} />
        </div>
      )}
      
    </div>
  );
}