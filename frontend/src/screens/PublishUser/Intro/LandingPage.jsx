import React from 'react';
//import Navigation from './Navigation';
import HeroSection from './HeroSection';
import CourseSection from './CourseSection';
import TestimonialSection from './TestimonialSection';
import TeacherSection from './TeacherSection';
//import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

function LandingPage() {
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen ">
      {/* Hero Section */}
      <section className="py-5 w-full text-white px-1">
    <Container>
      <Row className="relative flex overflow-hidden justify-self-center flex-col w-screen bg-none max-md:max-w-full py-0">
        <Col lg={20} md={12} className="relative z-index-1">
          <HeroSection />
        </Col>
      </Row> {/* Đóng thẻ Row ở đây */}
    </Container>
  </section>

      {/* Course Section */}
      <section className="justify-self-center flex-col w-screen bg-white bg-opacity-10 max-md:max-w-full py-0 backdrop-blur-[10px]">
        <Container>
          <Row className="g-4">
            <Col lg={20} md={12} className="d-flex justify-content-center align-items-center w-screen">
              <CourseSection />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={12} md={12} className="d-flex justify-content-center align-items-center">
              <TestimonialSection />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Teacher Section */}
      <section className="backdrop-blur-[10px]relative flex overflow-hidden justify-self-center flex-col w-screen bg-white bg-opacity-10 max-md:max-w-full py-0 backdrop-blur-[10px]">
        <Container>
          <Row className="g-4">
            <Col lg={12} md={12} className="d-flex justify-content-centealign-items-center">
              <TeacherSection />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      {/*<Footer />*/}
    </div>
  );
}

export default LandingPage;
