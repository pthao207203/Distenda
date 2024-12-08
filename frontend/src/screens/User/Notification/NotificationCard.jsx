import React from 'react';

function NotificationCard({ title, date, time }) {
  return (
    <div className="px-[40px] py-[40px] flex relative items-center min-h-[130px] rounded border border-white border-solid bg-neutral-900 max-md:px-5 max-md:max-w-full">
      <div 
          className="flex z-0 flex-col my-auto text-[28px] w-[560px] max-md:max-w-full overflow-hidden text-ellipsis text-white font-montserrat font-medium leading-tight"
            >
        <div 
          className="text-[28px] text-white max-md:max-w-full truncate overflow-hidden whitespace-nowrap"
          style={{
            whiteSpace: 'nowrap',
            fontFamily: 'Montserrat', 
            textOverflow: 'ellipsis',
            lineHeight: 'px',
            maxWidth: '560px', }}
          title={title} // Tooltip hiển thị toàn bộ nội dung khi hover
        >
          {title}
        </div>
        <div className="flex items-center self-start mt-[6px] text-[16px] text-[#CFF500] whitespace-nowrap">
          <div className="self-stretch mr-[8px]">{date}</div>
          <div className="self-stretch my-auto">{time}</div>
        </div>
      </div>
      <button 
        className="max-2xl:hidden flex absolute top-2/4 z-0 justify-center items-center self-start text-[20px] text-white whitespace-nowrap rounded-lg border border-white border-solid -translate-y-2/4 h-[50px] min-h-[50px] right-[25px] translate-x-[0%] w-[163px]"
        aria-label="Read notification"
      >
        <div className="px-[20px] py-[20px] self-center ">Đọc</div>
      </button>
    </div>
  );
}

export default NotificationCard;
