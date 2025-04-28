import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <Container fluid className="flex justify-center items-center my-5">
      <Row className="justify-center">
        <Col
          md={12}
          lg={12}
          className="relative flex self-center max-lg:self-start lg:px-20 lg:py-10 max-w-full bg-white/10 backdrop-blur-[10px] max-lg:px-[20px] max-lg:mt-[20px]"
        >
          <RegisterForm />
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

export default Register;
