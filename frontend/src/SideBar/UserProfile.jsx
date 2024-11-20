import React from 'react';

const UserProfile = () => {
  return (
    <div data-layername="ngườiDung" className="flex gap-2 justify-center items-center px-4 w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbae0514e8058efa2ff3c88f32951fbd7beba3099187677c6ba1c2f96547ea3f?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e" alt="User profile" className="object-contain shrink-0 self-stretch my-auto w-16 rounded-full aspect-[1.03]" />
      <div data-layername="ttNgườiDung" className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
        <div data-layername="button" className="flex gap-3 items-end px-3 w-full text-3xl font-semibold">
          <div data-layername="button" className="flex-1 shrink gap-2.5 self-stretch w-full">
            Cá biết bay
          </div>
        </div>
        <div data-layername="button" className="flex gap-3 items-end px-3 mt-4 w-full text-lg font-medium">
          <div data-layername="button" className="flex-1 shrink gap-2.5 self-stretch w-full">
            Thành viên mới
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;