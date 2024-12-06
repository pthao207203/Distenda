export default function StatCard({ title, value, percentage, iconSrc }) {
  return (
    <div className="flex flex-col self-stretch px-8 pt-1.5 pb-4 my-auto rounded-3xl bg-slate-500 max-h-[230px] min-w-[370px] w-[370px]">
      <div className="flex gap-3 items-center px-3 py-4 w-full text-xl">
        <img
          loading="lazy"
          src={iconSrc}
          alt={`${title} icon`}
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
        <div className="flex-1 shrink gap-2.5 self-stretch my-auto">
          {title}
        </div>
      </div>
      <div className="flex gap-2 items-center px-6 py-2 w-full text-3xl font-semibold whitespace-nowrap min-h-[59px]">
        <div className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[350px]">
          {value}
        </div>
      </div>
      <div className="flex gap-2 items-end p-6 w-full text-lg min-h-[41px]">
        <div className="flex-1 shrink gap-2.5 self-stretch w-full min-w-[350px]">
          {percentage}
        </div>
      </div>
    </div>
  );
}