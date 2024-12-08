export default function StatCard({ title, value, percentage, iconSrc }) {
  return (
    <div className="flex flex-col flex-1  w-full items-center self-center px-3 pt-1.5 pb-2 my-auto rounded-3xl bg-slate-500 max-h-[230px]">
      <div className="flex items-center px-2 py-3 w-full text-xl">
        <img
          loading="lazy"
          src={iconSrc}
          alt={`${title} icon`}
          className="object-contain shrink-0 self-center my-auto aspect-square w-[30px]"
        />
        <div className="flex  grow basis-0 text-white text-xl font-medium leading-tight shrink gap-2.5 self-start items-center justify-center my-auto min-h-[70px]">
          {title}
        </div>
      </div>
      <div className="flex gap-2 items-center px-6 py-2 w-full text-3xl font-semibold whitespace-nowrap max-h-[70px]">
        <div className="flex shrink gap-2 self-center my-auto w-full">
          {value}
        </div>
      </div>
      <div className="flex gap-2 items-end p-6 w-full text-lg min-h-[70px] ">
        <div className="flex shrink gap-2.5 self-stretch w-full ">
          {percentage}
        </div>
      </div>
    </div>
  );
}