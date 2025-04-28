import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// const testimonialData = [
//   {
//     avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
//     name: "Chuyên nghiệp",
//     content: "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance."
//   },
//   {
//     avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
//     name: "Học tập tuyệt vời",
//     content: "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance."
//   },
//   {
//     avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
//     name: "Giáo viên nhiệt tình",
//     content: "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance."
//   }
// ];

function TestimonialCard(review) {
  // console.log(review)
  return (
    <div className="card shadow-sm bg-white bg-opacity-10 max-lg:p-10">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img
            src={
              review.user?.UserAvatar
                ? review.user.UserAvatar
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e"
            }
            alt={review.user?.UserFullName}
            className="rounded-circle me-3"
            style={{ width: "30px", height: "30px" }}
          />
          <h5 className="mb-0 text-white font-semibold">
            {review.user?.UserFullName}
          </h5>
        </div>
        <p className="card-text text-white">{review.Comment}</p>
      </div>
    </div>
  );
}

function TestimonialSection(reviewData) {
  const review = Object.values(reviewData);
  console.log("review", review);
  return (
    <Container
      fluid
      className=" bg-none text-left items-start justify-start ml-0"
    >
      <div className="items-start mb-5">
        <h2 className="flex gap-3 items-start py-2 text-[1.25rem] max-lg:text-[16px] font-medium leading-none text-white max-w-[1333px] max-md:max-w-full">
          Nhận xét của học viên
        </h2>
      </div>
      <Row className="pb-5 flex flex-wrap w-full ">
        {review.map((testimonial, index) => (
          <Col
            key={index}
            lg={6}
            md={6}
            sm={12}
            className="mb-[8px] text-[1.25rem] max-lg:text-[14px]"
          >
            <TestimonialCard {...testimonial} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TestimonialSection;
