import React from "react";

function LoginButton({ provider, iconSrc }) {
  return (
    <button
      type="submit"
      className="flex flex-wrap gap-1 justify-center items-center py-3 px-16 max-lg:px-[64px] max-sm:px-[32px] min-h-[40px] w-full bg-white/15 max-lg:max-w-full mt-[10px]"
    >
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-cover shrink-0  self-stretch my-auto aspect-square w-[24px]"
      />
      <span className="gap-2.5 self-stretch my-auto min-w-[240px] text-[1.25rem] max-lg:text-[12px] max-lg:min-w-[180px]">
        Tiếp tục với {provider}
      </span>
    </button>
  );
}

export default LoginButton;
