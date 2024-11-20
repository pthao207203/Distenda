import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const teacherData = [
  { name: "Phạm Hồng Ánh" },
  { name: "Phạm Hồng Ánh" },
  { name: "Phạm Hồng Ánh" },
  { name: "Phạm Hồng Ánh" },
];

function TeacherCard({ name }) {
  return (
    <div className="text-center d-flex flex-column align-items-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b3fb1c054f222cb0970549f10f33d5c1719ab242f2ce6a8570eaa86763aef40?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
        alt={name}
        className="rounded-circle mb-3 "
        style={{ width: '104px', height: '104px' }}
      />
      <h3 className="text-white">{name}</h3>
    </div>
  );
}

function TeacherSection() {
  return (
    <section className="relative flex overflow-hidden justify-self-center flex-col w-screen bg-none max-md:max-w-full">
      <Container>
        <div className="text-center mb-5">
        <h2 className="flex gap-3 items-center px-3 py-5 text-xl font-medium leading-none text-white max-w-[1333px] max-md:max-w-full">
          Đội ngũ giáo viên</h2>
        </div>
        <Row className="g-4 mb-5">
          {teacherData.map((teacher, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12}>
              <TeacherCard {...teacher} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TeacherSection;
