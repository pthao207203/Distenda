import React, { forwardRef } from "react";

const CourseSection = forwardRef(({ title, description, children }, ref) => {
  return (
    <section ref={ref} className="flex flex-col p-2.5 mt-8 w-full rounded-3xl max-md:max-w-full overflow-x-hidden">
      <div className="flex flex-col w-full text-3xl font-semibold max-md:max-w-full">
        <h2 className="max-md:max-w-full">{title}</h2>
        <div className="flex mt-2.5 w-full bg-white bg-opacity-10 min-h-[2px] max-md:max-w-full" />
      </div>
      {description && (
        <div className="mt-4 font-medium text-xl max-md:max-w-full">
          {description
            .split('.  ')
            .filter((sentence) => sentence.trim())
            .map((sentence, index) => (
              <p key={index} className="mb-2">
                {sentence.trim()}.
              </p>
            ))}
        </div>
      )}
      {children}
    </section>
  );
});

export default CourseSection;
