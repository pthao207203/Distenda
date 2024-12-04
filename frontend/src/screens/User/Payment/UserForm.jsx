import React from "react";

export default function UserForm({ userDetails }) {
  return (
    <section className="flex flex-col p-4 w-full mt-4 border border-solid border-slate-300 text-[#131313] max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label htmlFor="fullName" className="text-xl font-medium max-md:max-w-full">
          Họ và tên
        </label>
        <input
          type="text"
          id="fullName"
          value={userDetails.fullName}
          readOnly
          className="flex-1 shrink gap-2.5 self-stretch p-2 mt-2 w-full text-lg font-normal bg-[#EBF1F9] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col mt-2 w-full whitespace-nowrap max-md:max-w-full">
        <label htmlFor="email" className="text-xl font-medium max-md:max-w-full">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={userDetails.email}
          readOnly
          className="flex-1 shrink gap-2.5 self-stretch p-2 mt-2 w-full text-lg font-normal bg-[#EBF1F9] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col mt-2 w-full max-md:max-w-full">
        <label htmlFor="phone" className="text-xl font-medium max-md:max-w-full">
          Số điện thoại
        </label>
        <input
          type="tel"
          id="phone"
          value={userDetails.phone}
          readOnly
          className="flex-1 shrink gap-2.5 self-stretch p-2 mt-2 w-full text-lg font-normal whitespace-nowrap bg-[#EBF1F9] max-md:max-w-full"
        />
      </div>
    </section>
  );
}