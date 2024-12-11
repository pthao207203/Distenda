import * as React from "react";
import {ActionButton} from "./components/ActionButton";
import FormField from "./components/BannerForm";
import ImageUpload from "./components/ImageUpload";

function BannerForm() {
//   const actions = [
//     {
//       label: "Lưu",
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1829cc85a1395ac435e855f81f93714a3f953f874b6692060baaea6cd1928f74?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b",
//       variant: "primary",
//     },
//     {
//       label: "Hủy",
//       variant: "secondary",
//     },
//   ];

  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      {/* Thanh điều hướng */}
      <nav className="flex flex-wrap items-center px-5 w-full text-lg font-semibold leading-none bg-white text-neutral-900 max-md:max-w-full">
        <div className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto">
          <div className="gap-2.5 self-stretch my-auto">Khóa học</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98f70346d1d4f1c803a0f6394b3c15a6fa705044f72e8af801a4830187fb2e39?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
            alt="Icon khóa học"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
        </div>
        <div className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto whitespace-nowrap">
          <div className="gap-2.5 self-stretch my-auto">Banner</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/afbc3441eaff1b70dbbb104c897b2359e47f74c3211912d8c9cdff0646d84e31?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
            alt="Icon banner"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
        </div>
        <div className="flex gap-3 items-center self-stretch px-3 py-1.5 my-auto">
          <div className="gap-2.5 self-stretch my-auto">Thêm banner</div>
        </div>
      </nav>

      {/* Form banner */}
      <form className="flex flex-col px-16 pt-16 pb-60 mx-auto w-full text-xl font-medium leading-none bg-white min-h-[983px] max-md:px-5 max-md:pb-24 max-md:mt-1.5 max-md:max-w-full">
        {/* Nút hành động */}
        <div className="flex gap-3 justify-end items-center w-full">
            <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/1829cc85a1395ac435e855f81f93714a3f953f874b6692060baaea6cd1928f74?apiKey=7a79403a23cb489f853e4845c47ede19&"
            label="Lưu"
            variant="primary"
            />
            <ActionButton label="Hủy" variant="secondary" />
        </div>

        {/* Trường nhập liệu */}
        <FormField label="Tên banner" value="HTML cơ bản" id="bannerName" />

        {/* Trường chọn khóa học */}
        <FormField
          label="Chọn khóa học"
          value="HTML cơ bản"
          id="courseSelect"
          hasDropdown={true}
          dropdownIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08223d2e0151893bb0c67c9f4e9fae4e42409d304bba895c48f833ba33717bab?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
        />

        {/* Trường tải lên ảnh */}
        <ImageUpload
          label="Banner 1"
          uploadIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/0b516c63e31267ce6e114c8d3b4292335012bee5e99d5deb37cc823ac993268f?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
        />
      </form>
    </div>
  );
}

export default BannerForm;
