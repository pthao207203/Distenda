// ChatArea2.jsx
import React from "react";
import ChatMessage from "./ChatMessage";

function ChatArea2({ messages }) {
  return (
    <div className="flex flex-col h-full px-10 pt-2 max-md:px-5 max-md:max-w-full">
      {/* Hiển thị các tin nhắn */}
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          isUser={message.isUser}
          time={message.time}
          message={message.message}
        />
      ))}
    </div>
  );
}

export default ChatArea2;
