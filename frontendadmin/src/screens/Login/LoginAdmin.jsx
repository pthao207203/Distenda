import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import GetOTP from './GetOTP';
import OTP from './OTP';

function LoginAdmin() {
  const [currentForm, setCurrentForm] = useState('GetOTP'); // Quản lý form hiện tại
  const [email, setEmail] = useState('');
  console.log("Current Form:", currentForm);
  return (
    <Container fluid className="flex justify-center items-center my-5">
      <Row className="justify-center w-full">
        <Col
          md={10}
          lg={4}
          className="relative flex items-center justify-center max-md:mt-10"
        >
          {currentForm === 'GetOTP' && (
            <GetOTP 
              onNext={() => setCurrentForm('OTP') } 
              onSetEmail={setEmail}
            />
          )}
          {currentForm === 'OTP' && <OTP email={email}/>}
        </Col>
      </Row>
    </Container>
  );
}

export default LoginAdmin;
