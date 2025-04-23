import React from "react";

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
      20 // Giới hạn 40 từ
    ),
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dd99b103d1c6d1f37843a55b62a12eb53e88338eccfa590194d5a19e5b5c189?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Uy tín",
    content: truncateText(
      "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",
      20
    ),
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34a9365c19398781429034df8caf6fc4fe68f1b9c3bc52a87dc16eb18cffc841?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Sáng tạo",
    content: truncateText(
      "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",
      20
    ),
  },
];

// Component hiển thị từng thẻ thông tin
function InfoCard({ icon, title, content }) {
  return (
    <div className="p-[1.5rem] border-0 bg-white bg-opacity-10 backdrop-blur-[10px]">
      <div className="card-body m-[0.5rem]">
        <img
          src={icon}
          alt={title}
          className="mb-[20px]"
          style={{ width: "30px", height: "30px" }}
        />
        <h5 className="card-title fw-bold text-white text-[2rem] ">{title}</h5>
        <p className="text-white mt-[10px] text-[1.25rem] ">{content}</p>
      </div>
    </div>
  );
}

// Component InfoCards chính
function InfoCards() {
  return (
    <div className="mt-[80px] flex flex-wrap text-white ">
      {/* Container không có khoảng cách bên trái */}
      <div className="relative flex flex-wrap rounded-lg w-full mx-0">
        <div className="grid grid-cols-3 gap-5 w-full justify-center">
          {infoCardsData.map((card, index) => (
            <div key={index} className="flex-1 w-full">
              <InfoCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
