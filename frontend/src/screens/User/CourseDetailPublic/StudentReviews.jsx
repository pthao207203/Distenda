import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const testimonialData = [
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    name: "Chuyên nghiệp",
    content: "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance."
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    name: "Học tập tuyệt vời",
    content: "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance."
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    name: "Giáo viên nhiệt tình",
    content: "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance."
  }
];

function TestimonialCard({ avatar, name, content }) {
  return (
    <div className="card h-500 shadow-sm bg-white bg-opacity-10">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img
            src={avatar}
            alt={name}
            className="rounded-circle me-3"
            style={{ width: '50px', height: '50px' }}
          />
          <h5 className="mb-0 text-white">{name}</h5>
        </div>
        <p className="card-text text-white">{content}</p>
      </div>
    </div>
  );
}

function TestimonialSection() {
  return (
      <Container className=" bg-none text-left items-start justify-start ml-0">
        <div className="items-start mb-5">
        <h2 className="flex gap-3 items-start py-2 text-xl font-medium leading-none text-white max-w-[1333px] max-md:max-w-full">
          Nhận xét của học viên</h2>
        </div>
        <Row className="pb-5 flex flex-wrap  ">
          {testimonialData.map((testimonial, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-2 ">
              <TestimonialCard {...testimonial} />
            </Col>
          ))}
        </Row>
      </Container>
  );
}

export default TestimonialSection;
