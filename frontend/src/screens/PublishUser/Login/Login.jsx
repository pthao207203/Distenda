import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import PasswordReset from './PasswordReset';
import OTP from './OTP';
import Password from './Password';

function Login() {
  const [currentForm, setCurrentForm] = useState('LoginForm'); // Quản lý form hiện tại
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Điều hướng

  const handleClose = () => {
    if (currentForm === 'LoginForm') {
      navigate('/'); // Quay về trang Home nếu đang ở LoginForm
    } else {
      setCurrentForm('LoginForm'); // Quay lại LoginForm nếu đang ở form khác
    }
  };

  return (
    <Container fluid className="flex justify-center items-center my-5">
      <Row className="justify-center w-100">
        <Col
          md={12}
          lg={6}
          className="relative flex self-center px-20 py-10 mt-10 max-w-full bg-white/10 backdrop-blur-[10px] w-[688px] max-md:px-5 max-md:mt-10"
        >
          {currentForm === 'LoginForm' && (
            <LoginForm onForgotPassword={() => setCurrentForm('PasswordReset')} />
          )}

          {currentForm === 'PasswordReset' && (
            <PasswordReset
              onNext={() => setCurrentForm('OTP')}
              onSetEmail={setEmail}
            />
          )}

          {currentForm === 'OTP' && (
            <OTP onNext={() => setCurrentForm('Password')} email={email} />
          )}

          {currentForm === 'Password' && <Password />}

          <button
            type="button"
            aria-label="Close"
            className="absolute top-6 right-6 z-10 h-8 w-8 flex items-center justify-center"
            onClick={handleClose} // Gọi hàm handleClose
          >
            <img src="Icon/X.svg" alt="Close" className="object-contain w-full h-full" />
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
