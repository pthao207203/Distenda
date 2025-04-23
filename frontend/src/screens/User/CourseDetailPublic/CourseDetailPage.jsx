import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseContent from "./CourseContent";
import PageNav from "./PageNav";
import LoginRequest from "../CourseDetailPublic/LoginRequest";
import CheckoutPage from "../Payment/CheckoutPage";
import Bank from "../Payment/Bank";
import ThankYouPage from "../Payment/ThankYouPage";
import Cookies from "js-cookie";
import {
  courseDetailController,
  coursePayController,
} from "../../../controllers/course.controller";
import { useOutletContext } from "react-router-dom";
import Loading from "../../../components/Loading";
import { addNotification } from "../../../services/notification.service";

export default function CourseDetailPage() {
  const { headerHeight } = useOutletContext(); // Nhận giá trị từ context

  // Dùng headerHeight trong việc bố trí giao diện hoặc logic
  console.log("Header Height:", headerHeight);
  const [isLoginRequestVisible, setIsLoginRequestVisible] = useState(false);

  const handleOpenLoginRequest = () => {
    setIsLoginRequestVisible(true);
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

  // Logic khác như fetch dữ liệu khóa học, thông báo, etc.

  const handleOpenThank = async () => {
    setIsPaymentVisible(false);
    setIsBankVisible(false);
    setIsThankVisible(true);
    document.body.style.overflow = "hidden";

    try {
      let token = Cookies.get("user_token");

      if (token && data?.CourseName && data?.CourseSlug) {
        const message = `Bạn đã đăng ký thành công ${data.CourseName}! Mong bạn sớm vào học với chúng tôi!`;

        const result = await addNotification({
          message,
          type: "success",
          userToken: token,
        });

        if (result.success) {
          console.log("Thông báo đã được gửi thành công");
        } else {
          console.error("Không thể gửi thông báo");
        }
      } else {
        console.error("Dữ liệu khóa học không hợp lệ.");
      }
    } catch (err) {
      console.error("Không thể gửi thông báo:", err);
      alert("Có lỗi xảy ra khi gửi thông báo. Vui lòng thử lại.");
    }
  };

  const handleCloseThank = () => {
    setIsThankVisible(false);
    document.body.style.overflow = "auto";
  };

  const token = Cookies.get("user_token"); // Lấy token từ cookie
  const isAuthenticated = token !== undefined; // Kiểm tra xem token có tồn tại không

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const { CourseSlug } = useParams();

  // Thêm chức năng đăng ký khoá học ở đây
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const result = await coursePayController(CourseSlug);
        if (result === 400) {
          // console.log("Thành công");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        // setLoading(false);
      }
    };

    if (isBankVisible && CourseSlug) {
      fetchData(); // Gọi fetchData khi cần
    }
  }, [isBankVisible, CourseSlug]);

  useEffect(() => {
    async function fetchData(courseSlug) {
      // console.log("vao")
      const result = await courseDetailController(setLoading, courseSlug);
      // console.log(result);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    if (CourseSlug) {
      fetchData(CourseSlug); // Gọi fetchData với CourseSlug
    }
  }, [CourseSlug]);

  if (loading) {
    return <Loading />;
  }
  console.log("course => ", data);

  return (
    <div className="flex flex-col relative w-full h-full overflow-y-auto">
      {/* <PageNav {...data} /> */}
      {/* CourseContent nhận hàm handleOpenPayment */}
      <CourseContent
        {...data}
        headerHeight={headerHeight}
        onRegister={
          isAuthenticated ? handleOpenPayment : handleOpenLoginRequest
        }
      />

      {/* Nếu đã đăng nhập, hiển thị Payment overlay */}
      {isAuthenticated && isPaymentVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <CheckoutPage
            {...data}
            handleOpenBank={handleOpenBank}
            onClose={handleClosePayment}
          />
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
          <ThankYouPage
            onClose={handleCloseThank}
            content="Cảm ơn bạn! Thông tin thanh toán sẽ được kiểm tra và thông báo trong vòng 24h tới!"
          />
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
