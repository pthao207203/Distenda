import React from 'react';
import { Link } from 'react-router-dom';

function NotificationCard({ title, date, time, link }) {
  return (
    <div className="px-[40px] py-[40px] flex relative items-center  min-h-[130px] rounded border border-white border-solid bg-neutral-900 max-lg:px-[12px] max-lg:py-[12px]  max-md:max-w-full hover:bg-opacity-25 hover:backdrop-blur-[25px]">
      <Link to={link} className="w-full">
      <div 
          className="flex z-0 flex-col my-auto text-[1.75rem] max-lg:[18px]  max-md:max-w-full text-white font-montserrat font-medium leading-tight"
            >
        <div 
          className="text-[16px] lg:text-[1.75rem] text-white max-lg:max-w-full truncate  whitespace-nowrap"
          style={{
            whiteSpace: 'normal',
            fontFamily: 'Montserrat', 
            lineHeight: 'px',
            }}
          title={title} // Tooltip hiển thị toàn bộ nội dung khi hover
        >
          {title}
        </div>
        <div className="flex items-center self-start mt-[6px] text-[12px] lg:text-[1.25rem]  text-[#CFF500] whitespace-nowrap">
          <div className="self-stretch mr-[8px]">{date}</div>
          <div className="self-stretch my-auto">{time}</div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default NotificationCard;





