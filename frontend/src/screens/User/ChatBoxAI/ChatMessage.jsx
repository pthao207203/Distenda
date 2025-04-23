// src/components/ChatMessage.jsx
import React from "react";

function ChatMessage({ message, time, isUser }) {
  return (
    <div
      className={`w-full text-white my-[1.25rem] ${isUser ? "pl-[500px]" : "pr-[500px]"} max-md:pl-5 max-md:pr-5 max-md:max-w-full`}
    >
      <div
        className={`flex flex-col justify-center px-4 py-3 w-full rounded-lg ${
          isUser ? "bg-neutral-900" : "bg-white bg-opacity-25"
        } max-md:max-w-full`}
      >
        <time className="text-xs max-md:max-w-full">{time}</time>
        <div
          className="mt-3 text-xl max-md:max-w-full"
          dangerouslySetInnerHTML={{ __html: message }}  
        />
      </div>
    </div>
  );
}

export default ChatMessage;
