import * as React from "react";

function FormField({ label, required, hasIcon }) {
  return (
    <div className="flex items-start mt-4 max-md:pr-5">
      <div className="flex flex-col self-end mt-3 mr-0 w-full max-md:max-w-full">
        <label className="text-xl font-medium leading-none text-neutral-900 max-md:max-w-full">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        <div className="flex gap-2.5 items-start px-2.5 py-5 mt-2 w-full rounded-lg border border-solid border-slate-500 min-h-[63px] max-md:max-w-full">
          {hasIcon && (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/08223d2e0151893bb0c67c9f4e9fae4e42409d304bba895c48f833ba33717bab?apiKey=7a79403a23cb489f853e4845c47ede19&"
              alt=""
              className="object-contain w-6 aspect-square"
            />
          )}
        </div>
      </div>
      {required && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/298f741eb988e68b03308bc8cf62a0bb27455d818ad3fb3f08a68daa89682333?apiKey=7a79403a23cb489f853e4845c47ede19&"
          alt=""
          className="object-contain shrink-0 self-start aspect-square w-[25px]"
        />
      )}
    </div>
  );
}

export default FormField;