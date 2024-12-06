import React from 'react';

function UserHeader() {
  return (
    <div className="flex flex-wrap gap-3 items-center w-full font-medium max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/4d4854acb7a6e508e93c5e0ed1944b29e7a75c82071720689dfc86f3e86f3c34?apiKey=7a79403a23cb489f853e4845c47ede19&"
        alt="User profile avatar"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[119px]"
      />
      <div className="flex flex-col flex-1 shrink items-start self-stretch my-auto text-lg basis-6 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold text-neutral-900">
            Lê Thị Dung
          </div>
          <div className="flex gap-1 items-center self-start mt-3">
            <div className="self-stretch my-auto text-neutral-900 text-opacity-50">
              User ID
            </div>
            <div className="self-stretch my-auto text-neutral-900">
              USE1234
            </div>
          </div>
          <div className="mt-3 text-neutral-900 text-opacity-50">
            cabietbay@gmail.com
          </div>
        </div>
      </div>
      <button 
        className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto text-xl leading-none text-white whitespace-nowrap bg-red-600 rounded-lg min-h-[46px]"
        aria-label="Block user"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/e3f6e349bcf83444b5fd0dde247adf5fdab8e0f04e5c90575ec6088c214d0256?apiKey=7a79403a23cb489f853e4845c47ede19&"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
        <span className="gap-2.5 self-stretch my-auto">Chặn</span>
      </button>
    </div>
  );
}

export default UserHeader;