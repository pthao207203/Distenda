import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// const teacherData = [
//   { name: "Phạm Hồng Ánh" },
//   { name: "Phạm Hồng Ánh" },
//   { name: "Phạm Hồng Ánh" },
//   { name: "Phạm Hồng Ánh" },
// ];

function TeacherCard(teacher) {
  return (
    <div className="text-center d-flex flex-column align-items-center">
      <img
        src={teacher.AdminAvatar}
        alt={teacher.AdminFullName}
        className="rounded-circle"
        style={{ width: '104px', height: '104px' }}
      />
      <h3 className="text-white px-[20px] py-[20px] font-medium text-[20px]">{teacher.AdminFullName}</h3>
    </div>
  );
}

function TeacherSection(teacherData) {
  // const teachers = teacherData
  const teachers = teacherData ? teacherData.teacherData : []; // Lấy danh sách các khóa học (mảng)
  // console.log("Object.values(teacherData):", teachers);
  return (
    <section className="flex-col w-screen bg-none max-md:max-w-full  ">
      <Container>
        <div className="text-center mb-[16px]">
          <h2 className=" flex items-left px-[12px] py-[20px] mb-[24px] text-[20px] font-medium leading-none text-white max-w-[1333px] max-md:max-w-full">
            Đội ngũ giáo viên</h2>
        </div>
        <Row className="g-[40px] mt-[20px] mb-[50px]">
          {teachers.length > 0 ? (
            teachers.map((teacher, index) => (
              <Col key={index} lg={3} md={4} sm={6} xs={12}>
                <TeacherCard {...teacher} />
              </Col>
            ))) : (
            <div>Không có giảng viên nào để hiển thị.</div>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default TeacherSection;
