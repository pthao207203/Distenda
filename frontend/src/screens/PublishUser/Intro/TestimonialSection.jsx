import React from "react";
import { Container, Row } from "react-bootstrap";

const testimonialData = [
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    name: "Chuyên nghiệp",
    content:
      "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    name: "Chuyên nghiệp",
    content:
      "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9cb1fde836e101b0adff8ddd17331a895a0430fb8f4bf1741db25dc7d605b4?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    name: "Chuyên nghiệp",
    content:
      "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",
  },
];

function TestimonialCard({ avatar, name, content }) {
  return (
    <div className="card bg-white bg-opacity-10 justify-items-start w-auto max-w-[347px] mx-auto flex-shrink-0 backdrop-blur-[10px]">
      <div className="card-body px-[20px] py-[20px]">
        <div className="d-flex align-items-center mb-[8px]">
          <img
            src={avatar}
            alt={name}
            className="rounded-circle me-[32px]"
            style={{ width: "50px", height: "50px" }}
          />
          <h5 className="mb-0 text-[1.25rem] max-lg:text-[px] font-semibold text-white">
            {name}
          </h5>
        </div>
        <p
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            margin: 0,
            padding: 0,
            marginTop: "20px",
            marginBottom: "20px",
          }}
          className="card-text text-white font-regular text-[1.25rem] max-lg:text-[px]"
        >
          {content}
        </p>
      </div>
    </div>
  );
}

function TestimonialSection() {
  return (
    <section className=" text-left flex-col w-screen  max-lg:max-w-full  ">
      <Container>
        <div className="text-left mb-[16px]">
          <h2 className="flex items-left py-[20px] text-[1.25rem] max-lg:text-[px] font-medium leading-none text-white max-lg:max-w-full">
            Nhận xét của học viên
          </h2>
        </div>
        <Row className="grid grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="w-auto flex-shrink-0">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialSection;
