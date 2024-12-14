export function TextArea({ id, label, minHeight, value, handleChange }) {
  return (
    <div className="flex flex-col mt-6 w-full leading-none min-h-[129px] max-md:max-w-full">
      <label className="max-md:max-w-full" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => handleChange(id, e.target.value)} // Sử dụng id thay vì label
        style={{ minHeight: `${minHeight}px` }} // Áp dụng minHeight
        className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 whitespace-nowrap rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
      />
    </div>
  );
}
