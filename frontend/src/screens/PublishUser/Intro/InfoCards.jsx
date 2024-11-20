import React from 'react';

// Hàm rút gọn nội dung tự động
function truncateText(text, maxWords) {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
}

// Dữ liệu thẻ thông tin
const infoCardsData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a090416236446ab673bd690fa7d01f0d960d8637a8d3283a03fb9ea3405a0bd7?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Chuyên nghiệp",
    content: truncateText(
      "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",
      40 // Giới hạn 40 từ
    ),
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dd99b103d1c6d1f37843a55b62a12eb53e88338eccfa590194d5a19e5b5c189?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Uy tín",
    content: truncateText(
      "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",
      40
    ),
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34a9365c19398781429034df8caf6fc4fe68f1b9c3bc52a87dc16eb18cffc841?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Sáng tạo",
    content: truncateText(
      "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",
      40
    ),
  },
];

// Component hiển thị từng thẻ thông tin
function InfoCard({ icon, title, content }) {
  return (
    <div className="card shadow-sm border-0 mb-4 bg-white bg-opacity-10">
      <div className="card-body d-flex flex-column">
        <img src={icon} alt={title} className="mb-3" style={{ width: "50px", height: "50px" }} />
        <h5 className="card-title fw-bold text-white">{title}</h5>
        <p className="card-text text-white">{content}</p>
      </div>
    </div>
  );
}

// Component InfoCards chính
function InfoCards() {
  return (
    <div className="container mt-5 mx-0">
      <div className="relative flex overflow-hidden justify-self-start flex-col w-screen max-md:max-w-full py-0">
      <div className="row py-0 my-auto ">
          {infoCardsData.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <InfoCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default InfoCards;
