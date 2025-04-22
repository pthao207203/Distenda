import React, { forwardRef } from "react";

const CourseSection = forwardRef(({ title, description, children }, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col p-2.5 mt-8 max-lg:mt-20 w-full rounded-3xl max-lg:max-w-full overflow-x-hidden"
    >
      <div className="flex flex-col w-full text-[1.875rem] max-lg:text-[20px] font-semibold max-lg:max-w-full">
        <h2 className="max-lg:max-w-full">{title}</h2>
        <div className="flex mt-2.5 w-full bg-white bg-opacity-10 min-h-[2px] max-lg:max-w-full" />
      </div>
      {description && (
        <div className="font-medium text-[1.25rem] max-lg:text-[14px] max-lg:max-w-full">
          {description}
        </div>
      )}
      {children}
    </section>
  );
});

export default CourseSection;
