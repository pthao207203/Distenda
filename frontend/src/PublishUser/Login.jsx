import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center flex overflow-hidden flex-col pb-52 relative bg-[#131313] max-md:pb-24">  
      <Navigation />

      <Container fluid className="d-flex justify-content-center align-items-center mt-5">
        <Row className="justify-content-center w-100">
          <Col md={12} lg={6} className="position-relative flex self-center px-20 py-10 mt-36 max-w-full bg-white/10 backdrop-blur-[10px] w-[688px] max-md:px-5 max-md:mt-10">
            <LoginForm />

            <button type="button" aria-label="Close" className="absolute top-6 right-6 z-10 h-8 w-8 flex items-center justify-center">
              <img src="Icon/close.png" alt="Close" className="object-contain w-full h-full" />
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;