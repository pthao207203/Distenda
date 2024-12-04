import * as React from "react";

export default function ProductCard({ title, duration, price, imageUrl }) {
  return (
    <section className="flex overflow-hidden flex-wrap gap-6 justify-start items-center px-2 py-2.5 w-full leading-none bg-[#EBF1F9] border border-solid border-slate-300 min-h-[203px] max-md:max-w-full">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.14] w-[195px]"
      />
      <div className="flex flex-col flex-1 shrink self-stretch items-center my-auto basis-0 max-md:max-w-full">
        <div className="flex flex-wrap gap-3 px-3 pt-4 pb-10 w-full text-3xl font-semibold text-[#131313] max-md:max-w-full">
          <h2 className="flex-1 shrink gap-2.5 self-center w-full ">
            {title}
          </h2>
        </div>
        <div className="flex flex-col items-start py-3 gap-4 w-full font-medium max-md:max-w-full">
          <div className="flex gap-3 items-center px-3 max-w-full text-xl  text-[#131313]">
            <p >
              Thời gian: {duration}
            </p>
          </div>
          <div className="flex gap-3 items-center px-3 max-w-full h-5 font-[600] text-3xl text-[#DF322B] whitespace-nowrap">
            <p >
              {price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}