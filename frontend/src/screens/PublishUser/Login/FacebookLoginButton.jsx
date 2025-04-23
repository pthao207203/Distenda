import React from "react";

function FacebookLoginButton({ provider, iconSrc, onSuccess, onFailure }) {
  const handleFBLogin = () => {
    window.FB.login(
      (response) => {
        if (response.status === "connected") {
          onSuccess(response.authResponse);
        } else {
          onFailure("Người dùng chưa cấp quyền hoặc có lỗi.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <button
      onClick={handleFBLogin}
      className="flex text-[1.25rem] max-lg:text-[12px] items-center justify-center gap-2 px-[0.5rem] py-[0.8rem] bg-white text-black min-h-[40px] border border-gray-300 rounded-[4px] hover:bg-gray-100"
      style={{ fontWeight: "450" }}
    >
      <img
        src="/Icon/FBicon.svg"
        alt="Facebook"
        className="w-[20px] h-[20px]"
      />
      Sign in with Facebook
    </button>
    // <button
    //   onClick={handleFBLogin}
    //   type="submit"
    //   className="flex flex-wrap gap-1 justify-center items-center py-3 px-16 max-lg:px-[64px] max-sm:px-[32px] min-h-[40px] w-full bg-white/15 max-lg:max-w-full mt-[10px]"
    // >
    //   <img
    //     loading="lazy"
    //     src={iconSrc}
    //     alt=""
    //     className="object-cover shrink-0  self-stretch my-auto aspect-square w-[24px]"
    //   />
    //   <span className="gap-2.5 self-stretch my-auto min-w-[240px] text-[1.25rem] max-lg:text-[12px] max-lg:min-w-[180px]">
    //     Tiếp tục với {provider}
    //   </span>
    // </button>
  );
}

export default FacebookLoginButton;
