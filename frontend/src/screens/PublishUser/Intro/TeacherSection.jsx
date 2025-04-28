import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
        src={teacher.AdminAvatar ? teacher.AdminAvatar : "/Icon/image.svg"}
        alt={teacher.AdminFullName}
        className="rounded-circle object-cover"
        style={{ width: "104px", height: "104px" }}
      />
      <h3 className="text-white px-[20px] py-[20px] font-medium text-[1.25rem] max-lg:text-[18px]">
        {teacher.AdminFullName}
      </h3>
    </div>
  );
}

function TeacherSection(teacherData) {
  // const teachers = teacherData
  const teachers = teacherData ? teacherData.teacherData : []; // Lấy danh sách các khóa học (mảng)
  // console.log("Object.values(teacherData):", teachers);
  return (
    <section className="flex-col w-screen bg-none max-lg:max-w-full  ">
      <Container>
        <div className="text-center mb-[16px]">
          <h2 className=" flex items-left px-[12px] py-[20px] mb-[24px] text-[1.25rem] max-lg:text-[18px] font-medium leading-none text-white max-w-[1333px] max-lg:max-w-full">
            Nhà sáng lập
          </h2>
        </div>
        <Row className="g-[40px] mt-[20px] mb-[50px]">
          {teachers.length > 0 ? (
            teachers.map((teacher, index) => (
              <Col key={index} lg={2} md={3} sm={4} xs={6}>
                <TeacherCard {...teacher} />
              </Col>
            ))
          ) : (
            <div>Không có giảng viên nào để hiển thị.</div>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default TeacherSection;
