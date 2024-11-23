import * as React from "react";

function ActionButton({ text }) {
  return (
    <button className="flex gap-3 justify-center items-center px-3 py-5 rounded-lg bg-slate-500 min-w-[240px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/63efcc48669f127d74e546af9bf5839c0403a27b9d45018b06ece519a1baf104?apiKey=ce9d43b270ae41158192dec03af70a1a&"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt=""
      />
      <span className="gap-2.5 self-stretch my-auto">{text}</span>
    </button>
  );
}

export default ActionButton;