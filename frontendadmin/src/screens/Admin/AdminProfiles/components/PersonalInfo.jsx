import * as React from "react";

const PersonalInfo = ({ name, email, phone, position, status }) => {
  return (
    <div className="flex flex-col mt-10 w-full text-xl max-md:max-w-full">
      <div className="font-semibold text-neutral-900 max-md:max-w-full">
        Thông tin cá nhân
      </div>
      <div className="flex flex-col mt-6 w-full font-medium leading-none max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label htmlFor="name" className="text-neutral-900 text-opacity-50">
              Họ và tên
            </label>
            <div
              id="name"
              className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
            >
              {name}
            </div>
          </div>
          <div className="flex flex-col whitespace-nowrap min-h-[91px] min-w-[240px] w-[360px]">
            <label htmlFor="email" className="text-neutral-900 text-opacity-50">
              Gmail
            </label>
            <div
              id="email"
              className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
            >
              {email}
            </div>
          </div>
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label htmlFor="phone" className="text-neutral-900 text-opacity-50">
              Số điện thoại
            </label>
            <div
              id="phone"
              className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 whitespace-nowrap rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
            >
              {phone}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-start mt-8 max-w-full w-[818px]">
          <div className="flex flex-col min-h-[91px] min-w-[240px] w-[360px]">
            <label
              htmlFor="position"
              className="text-neutral-900 text-opacity-50"
            >
              Chức vụ
            </label>
            <div
              id="position"
              className="flex relative flex-1 gap-2.5 items-start p-2.5 mt-2 rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
            >
              <div className="z-0 flex-1 shrink my-auto basis-0">
                {position}
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08223d2e0151893bb0c67c9f4e9fae4e42409d304bba895c48f833ba33717bab?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                alt=""
                className="object-contain absolute right-4 z-0 shrink-0 self-start w-6 h-6 aspect-square top-[19px]"
              />
            </div>
          </div>
          <div className="flex flex-col h-[91px] min-w-[240px] w-[360px]">
            <label
              htmlFor="status"
              className="text-neutral-900 text-opacity-50"
            >
              Trạng thái
            </label>
            <div
              id="status"
              className="flex flex-col justify-center p-3 mt-2 w-full text-neutral-900"
            >
              <div className="flex gap-3 justify-center items-center px-3 py-2.5 w-full bg-lime-300 min-h-[40px] rounded-[99px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
                <div className="gap-2.5 self-stretch my-auto">{status}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
