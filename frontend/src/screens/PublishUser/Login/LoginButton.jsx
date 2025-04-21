import React from 'react';

function LoginButton({ provider, iconSrc, onClick }) {
  return (
    <button type="button" onClick={onClick} className="flex flex-wrap gap-1 justify-center items-center p-3 w-full bg-white/15 max-md:max-w-full mt-4">
      <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
      <span className="gap-2.5 self-stretch my-auto min-w-[240px]">
        Tiếp tục với {provider}
      </span>
    </button>
  );
}

export default LoginButton;
