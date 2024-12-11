import * as React from "react";
import ActionButton from "./components/ActionButton";
import FormField from "./components/FormField";
import ImageUpload from "./components/ImageUpload";

const courseData = {
  name: "HTML cơ bản",
  options: ["HTML cơ bản"]
};

function BannerForm() {
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
        <div className="flex gap-2.5 items-start self-end text-white">
        <ActionButton 
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8a519aeacd2020baeb94ebfcc67db11646f466943744fdfc76c6c8f7eb3fe974?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
          text="Cập nhật"
          variant="gray"
        />
        <ActionButton 
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
          text="Xóa"
          variant="red"
        />
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