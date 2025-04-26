// src/ChatArea.jsx
import React from "react";
import ChatSuggestion from "./components/ChatSuggestion";  

const suggestions = [
  "Hãy giới thiệu cho tôi vài khóa học cho người mới bắt đầu!",
  "Đề xuất cho tôi khóa học mới dựa trên các khóa học tôi đã học!",
  "Tôi có thể thanh toán bằng những phương thức nào?",
];

const ChatArea = ({ onSuggestionClick }) => {
  return (
    <section className="mb-10 mt-10 items-center justify-between">
      <h2 className="mb-10 text-[1.75rem] text-center text-white">
        Chào mừng đến với Chat bot AI! Chúng tôi có thể giúp gì cho bạn?
      </h2>

      <div className="flex flex-col gap-[1.25rem] mb-10 items-center">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            onClick={() => onSuggestionClick(suggestion)}  
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            <ChatSuggestion text={suggestion} /> 
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChatArea;
