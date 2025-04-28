// ChatArea2.jsx
import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

function ChatArea2({ messages }) {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="flex overflow-y-auto flex-col h-full px-10 pt-2 max-md:px-5 max-md:max-w-full"
      style={{ maxHeight: "calc(100vh - 250px)" }} 
    >
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
