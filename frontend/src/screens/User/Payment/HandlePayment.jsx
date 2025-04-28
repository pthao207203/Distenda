import React, {
  useEffect,
  useState
} from "react";
import axios from "axios";
import ThankYouPage from "./ThankYouPage";

export default function HandlePayment() {
  const [popupContent, setPopupContent] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('orderId');
    const resultCode = params.get('resultCode');
    const amount = params.get('amount');

    if (resultCode === '0') {
      axios.post('http://localhost:3001/payment/confirm', {
          orderId,
          amount
        }, {
          withCredentials: true
        })
        .then(res => {
          setPopupContent("🎉 Thanh toán thành công! Khóa học đã được kích hoạt.");
          setShowPopup(true);
        })
        .catch(err => {
          if (err.response) {
            console.log("Lỗi backend:", err.response.data);
            setPopupContent(`${err.response.data.message}`);
          } else {
            setPopupContent("Lỗi kết nối server!");
          }
          setShowPopup(true);
        });
    } else {
      setPopupContent("Thanh toán thất bại hoặc bị hủy!");
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    window.location.href = "/courses";
  };

  return (
    <>
      {showPopup && <ThankYouPage onClose={handleClosePopup} content={popupContent} />}
      <div className="flex items-center justify-center h-screen">
        Đang xử lý thanh toán, vui lòng đợi...
      </div>
    </>
  );
}
