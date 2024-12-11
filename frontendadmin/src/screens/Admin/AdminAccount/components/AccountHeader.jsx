/* eslint-disable jsx-a11y/img-redundant-alt */
export function ProfileHeader({ name, email, avatarSrc, updateIconSrc, openPopup }) {
    return (
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-3 items-center basis-6 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col">
            <img
              loading="lazy"
              src={avatarSrc}
              alt={`Profile picture of ${name}`}
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[119px]"
            />
          </div>
          <div className="flex flex-col self-stretch my-auto">
            <div className="flex flex-col">
              <div className="text-2xl font-semibold text-neutral-900">{name}</div>
              <div className="mt-3 text-lg font-medium text-neutral-900 text-opacity-50">
                {email}
              </div>
            </div>
          </div>
        </div>
        {/* Nút Cập nhật */}
        <button
          className="flex gap-3 justify-center items-center px-3 py-3 text-xl font-medium leading-none text-white rounded-lg bg-slate-500 min-h-[46px]"
          onClick={openPopup} // Gọi hàm mở popup
          tabIndex="0"
        >
          <img
            loading="lazy"
            src={updateIconSrc}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="gap-2.5 self-stretch my-auto">Cập nhật</span>
        </button>
      </div>
    );
  }
  