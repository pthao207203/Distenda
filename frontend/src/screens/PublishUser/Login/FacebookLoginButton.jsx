import React from "react";

function FacebookLoginButton({ onSuccess, onFailure }) {
  const handleFBLogin = () => {
    window.FB.login((response) => {
      if (response.status === 'connected') {
        onSuccess(response.authResponse);
      } else {
        onFailure("Người dùng chưa cấp quyền hoặc có lỗi.");
      }
    }, {scope: 'public_profile,email'});
  };

  return (
    <button
      onClick={handleFBLogin}
      className="flex text-[1.185rem] items-center justify-center gap-2 px-[0.5rem] py-[0.8rem] bg-white text-black border border-gray-300 rounded hover:bg-gray-100"
      style={{ fontWeight: '450' }}
    >
        <img
        src="/Icon/FBicon.svg"   
        alt="Facebook"
        className="w-7 h-7"
      />
      Sign in with Facebook
    </button>
  );
}

export default FacebookLoginButton;
