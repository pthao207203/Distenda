import React, { useEffect } from 'react';

function FacebookLoginButton({ onLoginSuccess, onLoginFailure }) {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : process.env.REACT_APP_FB_CLIENT_ID,
        cookie     : true,
        xfbml      : true,
        version    : 'v18.0'
      });
    };
  }, []);

  const handleFBLogin = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
        onLoginSuccess(response.authResponse);  // Gửi accessToken lên backend
      } else {
        onLoginFailure("Người dùng từ chối đăng nhập");
      }
    }, {scope: 'public_profile,email'});
  };

  return (
    <button 
      onClick={handleFBLogin}
      className="flex p-3 w-full bg-blue-600 text-white justify-center mt-4"
    >
      <i className="fab fa-facebook mr-2"></i> Tiếp tục với Facebook
    </button>
  );
}

export default FacebookLoginButton;
