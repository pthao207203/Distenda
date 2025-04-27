import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import PasswordReset from "./PasswordReset";
import OTP from "./OTP";
import Password from "./Password";

function Login() {
  const [currentForm, setCurrentForm] = useState("LoginForm"); // Quản lý form hiện tại
  const [email, setEmail] = useState("");

  return (
    <Container fluid className="flex justify-center items-center my-5">
      <Row className="justify-center">
        <Col
          md={12}
          lg={12}
          className="relative flex self-center max-lg:self-start lg:px-20 lg:py-10 max-w-full bg-white/10 backdrop-blur-[10px] max-lg:px-[30px] max-lg:py-[20px] max-lg:mt-[20px]"
        >
          {currentForm === "LoginForm" && (
            <LoginForm
              onForgotPassword={() => setCurrentForm("PasswordReset")}
            />
          )}

          {currentForm === "PasswordReset" && (
            <PasswordReset
              onNext={() => setCurrentForm("OTP")}
              onSetEmail={setEmail}
            />
          )}

          {currentForm === "OTP" && (
            <OTP onNext={() => setCurrentForm("Password")} email={email} />
          )}

          {currentForm === "Password" && <Password />}

          <button
            type="button"
            aria-label="Close"
            className="absolute top-6 right-6 z-10 h-8 w-8 flex items-center justify-center"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="Icon/X.svg"
              alt="Close"
              className="object-contain w-full h-full"
            />
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
