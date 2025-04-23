"use client";
import React, { useState } from "react";
import { marked } from "marked";  
import ChatArea from "./ChatArea";  
import ChatArea2 from "./ChatArea2"; 
import ChatingInput from "./ChatingInput"; 
import { getGeminiReply } from "./gemini"; 

function AIChating() {
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [messages, setMessages] = useState([]);

  // Gửi tin nhắn khi người dùng gửi câu hỏi
  const handleSendMessage = async (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);

    // Nếu là tin nhắn đầu tiên, chuyển sang chế độ chat thực tế
    if (!hasStartedChat) {
      setHasStartedChat(true);
    }

    // Gọi Gemini API để lấy phản hồi
    const aiReply = await getGeminiReply(newMessage.message);

    // Chuyển đổi nội dung trả về từ Markdown thành HTML bằng marked
    const formattedReply = marked(aiReply);  

    const botMessage = {
      isUser: false,
      message: formattedReply,  
      time: new Date().toLocaleTimeString(),
    };

    // Thêm tin nhắn từ AI vào
    setMessages((prev) => [...prev, botMessage]);
  };

  // Hàm xử lý khi người dùng click vào suggestion
  const handleSuggestionClick = (suggestion) => {
    const newMessage = {
      isUser: true,
      message: suggestion,
      time: new Date().toLocaleTimeString(),
    };

    // Gửi câu hỏi từ suggestion vào chatbox
    handleSendMessage(newMessage);
  };

  return (
    <main className="h-screen w-full flex flex-col bg-center bg-cover backdrop-blur-[10px] max-md:px-5">
      {/* Vùng chat có thể scroll */}
      <div className="flex-1 overflow-y-auto flex flex-col justify-center max-h-[calc(100vh-200px)]">
        {hasStartedChat ? (
          <ChatArea2 messages={messages} />
        ) : (
          <ChatArea onSuggestionClick={handleSuggestionClick} /> 
        )}
      </div>

      {/* Vùng nhập liệu cố định */}
      <div className="flex justify-center">
        <ChatingInput onSendMessage={handleSendMessage} />
      </div>
    </main>
  );
}

export default AIChating;
