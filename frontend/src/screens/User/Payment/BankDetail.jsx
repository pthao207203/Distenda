import React from 'react';

function CopyableField({ value }) {
    return (
      <div className="flex flex-wrap gap-2 justify-between items-center p-3 w-full font-semibold bg-[#EBF1F9] max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto text-2xl text-black basis-0 max-md:max-w-full max-md:text-xl">
          {value}
        </div>
        <button 
          className="self-stretch my-auto text-xl text-blue-900"
          onClick={() => navigator.clipboard.writeText(value)}
          aria-label={`Copy ${value}`}
        >
          Sao chép
        </button>
      </div>
    );
}
  
function BankDetail() {
    const transferData = [
        {
          label: "CTY TNHH DISSTENDA",
          value: "004874573853573",
          icon: "https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/5429894499bfd12f4d5ffc0a2b639612093eefa09c1a8b9cd86760ff2158dc94?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"
        },
        {
          label: "Nội dung thanh toán",
          value: "HDFK234H"
        },
        {
          label: "Tổng số tiền",
          value: "3.000.000"
        }
      ];
  return (
    <section className="flex flex-col p-3 mt-2 gap-4 w-full border border-solid border-slate-300 max-md:max-w-full">
      {transferData.map((item, index) => (
        <div key={index} className="flex flex-col w-full gap-3 max-md:max-w-full">
          {index === 0 ? (
            <div className="flex flex-wrap gap-4 items-center w-full text-xl font-medium leading-none text-black max-md:max-w-full">
              <img
                loading="lazy"
                src={item.icon}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.84] w-[105px]"
              />
              <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                {item.label}
              </div>
            </div>
          ) : (
            <div className="text-xl font-medium leading-none text-black max-md:max-w-full">
              {item.label}
            </div>
          )}
          <CopyableField value={item.value} />
        </div>
      ))}
    </section>
  );
}

export default BankDetail;