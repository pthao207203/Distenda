import React, { useState } from 'react';
import BlockUserModal from './BlockUserModal';
import Loading from '../../../components/Loading'
import { userUnblockController, userBlockController } from "../../../controllers/user.controller"

function UserHeader({ data }) {
  // State để kiểm soát hiển thị popup và trạng thái chặn người dùng
  const [loading, setLoading] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isBlocked, setIsBlocked] = useState(!data?.UserStatus); // Trạng thái chặn người dùng

  // Hàm mở popup
  const showPopup = () => {
    setIsPopupVisible(true);
  };

  // Hàm đóng popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  // Hàm xử lý khi xác nhận chặn người dùng
  const handleBlockUser = async () => {
    const result = await userBlockController(setLoading, data._id)
    if (result.code === 200) {
      setIsBlocked(true); // Chuyển trạng thái thành "đã chặn"
      setIsPopupVisible(false); // Đóng popup
    }
  };

  // Hàm xử lý khi xác nhận bỏ chặn người dùng
  const handleUnblockUser = async () => {
    // Gọi API đổi trạng thái
    const result = await userUnblockController(setLoading, data._id)
    if (result.code === 200) {
      setIsBlocked(false); // Chuyển trạng thái thành "không bị chặn"
      setIsPopupVisible(false); // Đóng popup
    }
  };

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="flex flex-wrap gap-3 items-center w-full font-medium max-md:max-w-full">
      <img
        loading="lazy"
        src={data?.UserAvatar ? data.UserAvatar : "https://cdn.builder.io/api/v1/image/assets/TEMP/bbae0514e8058efa2ff3c88f32951fbd7beba3099187677c6ba1c2f96547ea3f?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"}
        alt="User profile avatar"
        className="object-cover rounded-full shrink-0 self-stretch my-auto aspect-square w-[119px]"
      />
      <div className="flex flex-col flex-1 shrink items-start self-stretch my-auto text-lg basis-6 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold text-neutral-900">
            {data.UserFullName}
          </div>
          <div className="flex gap-1 items-center self-start mt-3">
            <div className="self-stretch my-auto text-neutral-900 text-opacity-50">
              Tổng hóa đơn:
            </div>
            <div className="self-stretch my-auto text-neutral-900">
              {data.UserMoney ? data.UserMoney : 0}
            </div>
          </div>
          <div className="mt-3 text-neutral-900 text-opacity-50">
            {data.UserEmail}
          </div>
        </div>
      </div>

      {/* Nút chặn hoặc bỏ chặn */}
      {isBlocked ? (
        <button
          className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto text-xl leading-none text-white whitespace-nowrap bg-[#6C8299] rounded-lg min-h-[46px] hover:bg-slate-00"
          aria-label="Block user"
          onClick={showPopup} // Mở popup để xác nhận bỏ chặn
        >
          <img
            src={`${process.env.PUBLIC_URL}/icons/unlock.svg`}
            className="object-contain shrink-0 my-auto w-6 aspect-square"
            alt="Unlock icon" // Cung cấp thông tin alt nếu icon mang ý nghĩa quan trọng
          />
          <span className="gap-2.5 self-stretch my-auto">Bỏ chặn</span>
        </button>
      ) : (
        <button
          className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto text-xl leading-none text-white whitespace-nowrap bg-[#DF322B] rounded-lg min-h-[46px] hover:bg-red-700"
          aria-label="Block user"
          onClick={showPopup} // Mở popup để xác nhận chặn
        >
          <img
            src={`${process.env.PUBLIC_URL}/icons/lock.svg`}
            className="object-contain shrink-0 my-auto w-6 aspect-square"
            alt="Lock icon" // Cung cấp thông tin alt nếu icon mang ý nghĩa quan trọng
          />
          <span className="gap-2.5 self-stretch my-auto">Chặn</span>
        </button>
      )}

      {/* Sử dụng BlockUserModal */}
      {isPopupVisible && (
        <BlockUserModal
          isBlocked={isBlocked}         // Truyền trạng thái isBlocked để biết modal dùng cho chặn hay bỏ chặn
          onConfirm={isBlocked ? handleUnblockUser : handleBlockUser} // Xác nhận chặn hoặc bỏ chặn
          onCancel={closePopup}         // Đóng popup khi hủy
        />
      )}
    </div>
  );
}

export default UserHeader;
