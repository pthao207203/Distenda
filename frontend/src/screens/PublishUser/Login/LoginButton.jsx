import React, { useEffect } from "react";

function LoginButton({ onSuccess, onFailure }) {
  useEffect(() => {
    // Đảm bảo Google Identity API đã được tải
    window.onload = () => {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: onSuccess, // Gọi hàm onSuccess khi đăng nhập thành công
      });

      window.google.accounts.id.renderButton(
        document.getElementById("g_id_signin"),
        {
          theme: "outline",
          size: "large",
          shape: "square",
          text: "signin_with",
          logo_alignment: "center",
          width: "527px",
          cancel_on_tap_outside: true, 
        }
      );
    };
  }, [onSuccess]);

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        data-context="signin"
        data-ux_mode="popup"
        data-callback={onSuccess}
        data-auto_prompt="false"
      ></div>
      <div id="g_id_signin" className="g_id_signin" />
    </div>
  );
}

export default LoginButton;
