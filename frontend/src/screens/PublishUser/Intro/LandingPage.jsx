import React, { useState, useEffect } from "react";
//import Navigation from './Navigation';
import HeroSection from "./HeroSection";
import CourseSection from "./CourseSection";
import TestimonialSection from "./TestimonialSection";
import TeacherSection from "./TeacherSection";
//import Footer from './Footer';
import { Container, Row, Col } from "react-bootstrap";
import { homeController } from "../../../controllers/home.controller";
import Loading from "../../../components/Loading";

function LandingPage() {
  const [data, setData] = useState({
    courses: [],
    intructor: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await homeController(setLoading);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log("intructor ", data.intructor);
  console.log("courses ", data.courses);
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 w-full text-white px-1 hidden lg:block">
        <Container fluid className="px-0">
          <Row className="relative flex overflow-hidden justify-self-left flex-col max-w-full py-0">
            <Col lg={12} md={12} className="relative z-index-1">
              <HeroSection />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Course Section */}
      <section className="backdrop-blur-[10px] relative flex overflow-hidden justify-self-center flex-col w-full bg-white bg-opacity-10 max-md:max-w-full py-0">
        <Container className="py-0">
          <Row className="justify-center items-center gap-4">
            <Col lg={10} md={12} className="flex self-center">
              {data.courses.length > 0 && (
                <CourseSection courseData={data.courses} />
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="py-5 hidden lg:block">
        <Container>
          <Row className="gap-4">
            <Col lg={12} md={12} className="flex justify-center items-center">
              <TestimonialSection />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Teacher Section */}
      <section className="relative flex overflow-hidden justify-self-center flex-col w-full bg-white bg-opacity-10 max-md:max-w-full py-0 backdrop-blur-[10px]">
        <Container className="px-0">
          <Row className="gap-4">
            <Col lg={12} md={12} className="flex justify-center items-center">
              <TeacherSection teacherData={data.intructor} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LandingPage;
