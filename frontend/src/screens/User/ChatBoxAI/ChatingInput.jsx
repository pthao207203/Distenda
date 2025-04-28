import React, { useState } from "react";

const ChatingInput = ({ onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = () => {
    if (!inputMessage.trim()) return;
    const newMessage = {
      isUser: true,
      message: inputMessage,
      time: new Date().toLocaleTimeString(),
    };
    onSendMessage(newMessage);  

    // Reset input sau khi gửi
    setInputMessage("");  
  };

  return (
    <div className="flex items-center p-6 bg-white rounded-3xl bottom-[38px] left-[87px] w-[calc(100%_-_174px)] max-sm:left-5 max-sm:p-4 max-sm:w-[calc(100%_-_40px)]">
      <input
        type="text"
        placeholder="Nhập tin nhắn..."
        className="flex-1 text-xl border-[none] text-neutral-900"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        aria-label="Message input"
      />
      <button onClick={handleSend} aria-label="Send message">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M38.5 13.6675V28.315C38.5 34.685 34.7025 38.4825 28.3325 38.4825H13.6675C7.2975 38.5 3.5 34.7025 3.5 28.3325V13.6675C3.5 7.2975 7.2975 3.5 13.6675 3.5H28.315C34.7025 3.5 38.5 7.2975 38.5 13.6675Z"
            fill="black"
          />
          <path
            d="M21.738 12.5352L27.6978 18.0963C28.1007 18.4722 28.1007 19.0944 27.6978 19.4704C27.295 19.8463 26.6281 19.8463 26.2253 19.4704L22.0437 15.5685V28.7778C22.0437 29.3093 21.5713 29.75 21.0017 29.75C20.4322 29.75 19.9598 29.3093 19.9598 28.7778V15.5685L15.7782 19.4704C15.3753 19.8463 14.7085 19.8463 14.3056 19.4704C14.0972 19.2759 14 19.0296 14 18.7833C14 18.537 14.1111 18.2778 14.3056 18.0963L20.2654 12.5352C20.4599 12.3537 20.7239 12.25 21.0017 12.25C21.2796 12.25 21.5435 12.3537 21.738 12.5352Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatingInput;
