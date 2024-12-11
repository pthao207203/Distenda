import React from 'react';

function FormSection({ label, required, icon, textArea, minHeight }) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="flex flex-col w-full text-xl font-medium leading-none text-neutral-900">
      <label htmlFor={id} className="max-md:max-w-full">
        {label} {required && <span className="text-red-600" aria-hidden="true">*</span>}
      </label>
      <div className="flex gap-2.5 mt-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80" style={{ minHeight: minHeight || '63px' }}>
        {textArea ? (
          <textarea
            id={id}
            required={required}
            className="w-full p-2.5 rounded-lg"
            aria-required={required}
          />
        ) : (
          <div className="flex items-center w-full p-2.5">
            {icon && (
              <img
                loading="lazy"
                src={icon}
                alt=""
                className="object-contain w-6 aspect-square"
              />
            )}
            <input
              id={id}
              type="text"
              required={required}
              className="w-full ml-2"
              aria-required={required}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FormSection;