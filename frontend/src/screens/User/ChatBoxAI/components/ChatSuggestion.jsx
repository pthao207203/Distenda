import React from "react";

const ChatSuggestion = ({ text }) => {
  return (
    <button 
    className="inline-flex px-5 py-3 text-xl text-white rounded-3xl border border-solid bg-black/50 border-white/30 hover:bg-white/10">
      {text}
    </button>
  );
};

export default ChatSuggestion;
