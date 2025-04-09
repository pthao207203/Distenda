import * as React from "react";
import { ConfirmationButton } from "./ConfirmationButton";

export function ConfirmationDialog() {
  const buttons = [
    { text: "Có", variant: "primary", onClick: () => {} },
    { text: "Không", variant: "secondary", onClick: () => {} }
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center px-20 py-20 font-medium leading-none bg-white rounded-3xl max-w-[677px] max-md:px-5">
      <div className="flex flex-col items-center w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/e5f9826e22b01b1c8bd327296b2948721450b01230f9c87f02d8f9a1ed2e4ddb?apiKey=7a79403a23cb489f853e4845c47ede19&"
          alt=""
          className="object-contain aspect-square w-[59px]"
        />
        <div className="gap-3 mt-10 text-xl font-medium text-neutral-900">
          Bạn có chắc chắn muốn cập nhật những thay đổi không?
        </div>
        <div className="flex gap-2.5 items-start mt-8 text-3xl whitespace-nowrap">
          {buttons.map((button, index) => (
            <ConfirmationButton
              key={index}
              text={button.text}
              variant={button.variant}
              onClick={button.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}