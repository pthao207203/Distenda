import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { voucherCreatePostController } from "../../../../controllers/voucher.controller.js";
import { PopupConfirmCancel } from "../../../../components/PopupConfirmCancel";
import { PopupSuccess } from "../../../../components/PopupSuccess";
import { PopupError } from "../../../../components/PopupError";
import Loading from "../../../../components/Loading";

const VoucherInfo = () => {
  const navigate = useNavigate();
  const [voucher, setVoucher] = useState();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [errorPopupVisible, setErrorPopupVisible] = useState(false);

  const handleChange = (field, value) => {
    setVoucher((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAction = async (action) => {
    if (action === "save") {
      const result = await voucherCreatePostController(voucher);
      if (result?.code === 200) {
        setSuccessPopupVisible(true);
        navigate("/voucher", { state: { newVoucher: result.voucher } }); // Chuyển hướng và gửi voucher mới
      } else {
        setErrorPopupVisible(true);
      }
    } else if (action === "cancel") {
      setPopupContent(
        <>
          Bạn có muốn hủy tạo voucher mới?
          <br />
          Voucher mới sẽ không được lưu.
        </>
      );
      setPopupVisible(true);
    }
  };

  const handlePopupConfirm = () => {
    setPopupVisible(false);
    navigate("/voucher");
  };

  const handlePopupClose = () => setPopupVisible(false);
  const closeSuccessPopup = () => {
    setSuccessPopupVisible(false);
    navigate("/voucher");
  };
  const closeErrorPopup = () => setErrorPopupVisible(false);

  return (
    <section>
      <div className="flex flex-wrap gap-2.5 items-center w-full">
        <ActionButton label="Lưu" bgColor="bg-[#6C8299]" onClick={() => handleAction("save")} />
        <ActionButton label="Hủy" bgColor="bg-[#DF322B]" onClick={() => handleAction("cancel")} />
      </div>

      <div className="mt-10 w-full text-xl">
        <h3 className="font-semibold text-neutral-900">Thông tin voucher</h3>
        <div className="mt-6 font-medium">
          <div className="flex flex-wrap gap-[8rem] items-start w-full">
            <FormField label="Mã Voucher" value={voucher?.voucherCode} onChange={(val) => handleChange("voucherCode", val)} />
            <FormField label="Giảm giá (%)" value={voucher?.discountPercentage} onChange={(val) => handleChange("discountPercentage", val)} />
          </div>

          <div className="flex flex-wrap gap-[8rem] items-start mt-6 w-full">
            <FormField label="Tối thiểu" value={voucher?.minAmount} onChange={(val) => handleChange("minAmount", val)} />
            <FormField label="Giới hạn" value={voucher?.discountAmount} onChange={(val) => handleChange("discountAmount", val)} />
          </div>
        </div>
      </div>

      {/* Popups */}
      <PopupConfirmCancel
        isVisible={isPopupVisible}
        content={popupContent}
        confirm="Huỷ"
        onConfirm={handlePopupConfirm}
        onCancel={handlePopupClose}
      />
      <PopupSuccess
        isVisible={successPopupVisible}
        message="Cập nhật thành công!"
        onClose={closeSuccessPopup}
      />
      <PopupError
        isVisible={errorPopupVisible}
        message="Cập nhật thất bại. Vui lòng thử lại sau!"
        onClose={closeErrorPopup}
      />
    </section>
  );
};

const ActionButton = ({ label, bgColor, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={`flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto text-xl font-medium text-white rounded-lg ${bgColor} min-h-[46px]`}
    >
      <span className="gap-2.5 self-stretch my-auto">{label}</span>
    </button>
  );
};

const FormField = ({ label, value, onChange }) => {
  return (
    <div className="flex-1 min-w-60 max-w-[44rem]">
      <label className="text-[#13131380]">{label}</label>
      <div className="p-2.5 mt-3 rounded-lg border border-[#6C8299] border-opacity-80 w-full h-[4.25rem]">
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full outline-none border-none text-[#131313] bg-transparent"
        />
      </div>
    </div>
  );
};

export default VoucherInfo;