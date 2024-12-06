import * as React from "react";
import ActionButton from "./ActionButton";

function BlockUserModal({ onConfirm, onCancel, isBlocked }) {
  // Các hành động tùy thuộc vào trạng thái chặn hay bỏ chặn
  const actions = [
    {
      label: isBlocked ? "Bỏ chặn" : "Chặn", // Hiển thị nút "Chặn" hoặc "Bỏ chặn" tùy theo trạng thái
      variant: isBlocked ? "slate" : "danger", // Tùy chỉnh variant để phù hợp với hành động
      width: "225px",
      onClick: onConfirm, // Gọi khi xác nhận hành động
    },
    {
      label: "Hủy",
      variant: "secondary",
      width: "225px",
      onClick: onCancel, // Gọi khi hủy bỏ hành động
    }
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="flex overflow-hidden flex-col justify-center px-10 py-16 font-medium leading-none bg-white rounded-3xl min-w-[600px]">
        <div className="flex flex-col items-center w-full text-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/e59856f3b891e9171a8f4c7f7c293bfbd92c87f7625c4412504a8176cac1fc44?apiKey=7a79403a23cb489f853e4845c47ede19&"
            alt=""
            className="object-contain aspect-square w-[60px]"
          />
          <div className="mt-6 text-xl text-neutral-900">
            {isBlocked
              ? "Bạn có chắc chắn muốn bỏ chặn người dùng này?"
              : "Bạn có chắc chắn muốn chặn người dùng này?"}
          </div>
          <div className="flex gap-4 mt-8">
            {actions.map((action, index) => (
              <ActionButton
                key={index}
                label={action.label}
                variant={action.variant}
                width={action.width}
                onClick={action.onClick} // Truyền hàm onClick cho nút
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockUserModal;
