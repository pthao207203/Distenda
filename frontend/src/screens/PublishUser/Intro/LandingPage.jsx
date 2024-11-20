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
    <>
      {/* Hero Section */}
      <section className="py-5 w-full text-white px-1 ">
        <div className="relative z-index-1">
          <HeroSection />
        </div>
      </section>

      {/* Course Section */}
      <section className="relative flex overflow-hidden justify-self-center flex-col w-screen bg-white bg-opacity-10 max-md:max-w-full py-0">
        <Container>
          <Row className="g-4">
            <Col lg={12} md={12} className="d-flex justify-content-center align-items-center w-screen">
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
      <section className="relative flex overflow-hidden justify-self-center flex-col w-screen bg-white bg-opacity-10 max-md:max-w-full py-0">
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
    </>
  );
}

export default LandingPage;
