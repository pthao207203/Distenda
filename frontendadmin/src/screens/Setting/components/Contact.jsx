export function ContactInput({ id, label, value, type = "text", handleChange }) {
  return (
    <div className="flex flex-col leading-none min-h-[91px] min-w-[240px] max-w-[550px] w-full">
      <label className="text-neutral-900 text-opacity-50" htmlFor={`input-${id}`}>
        {label}
      </label>
      <input
        id={id} // Gắn id
        type={type}
        value={value || ""} // Xử lý giá trị null
        onChange={handleChange}
        className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 whitespace-nowrap rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900"
      />
    </div>
  );
}
