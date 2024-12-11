import * as React from "react";

function FormField({ label, value, hasDropdown }) {
  return (
    <div className="flex flex-col justify-center mt-10 w-full max-md:max-w-full">
      <label className="text-neutral-900 text-opacity-50 max-md:max-w-full">
        {label}
      </label>
      <div className="flex relative gap-2.5 items-start px-2.5 py-6 mt-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] text-neutral-900 max-md:max-w-full">
        <div className="z-0 flex-1 shrink my-auto basis-0 max-md:max-w-full">
          {value}
        </div>
        {hasDropdown && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/08223d2e0151893bb0c67c9f4e9fae4e42409d304bba895c48f833ba33717bab?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
            alt=""
            className="object-contain absolute right-4 z-0 shrink-0 self-start w-6 h-6 aspect-square top-[19px]"
          />
        )}
      </div>
    </div>
  );
}

export default FormField;