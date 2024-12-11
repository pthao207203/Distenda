import React from 'react';
import FormSection from './FormSection';
import ImageUpload from './ImageUpload';

function CourseForm() {
  return (
    <form className="flex flex-col px-16 py-8 mt-1.5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full text-xl font-medium leading-none max-w-screen max-md:max-w-full">
        <div className="flex flex-col mt-2.5 text-neutral-900 max-md:max-w-full">
          <label htmlFor="courseName" className="w-[860px]">
            Tên khóa học <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            id="courseName"
            type="text"
            required
            className="flex gap-2.5 mt-2 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] max-md:max-w-full"
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          className="flex gap-3 justify-center items-center px-3 py-3 text-white rounded-lg bg-slate-500 min-h-[50px]"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebcf993eb7976cff90cc8a7bea1273b209255d5447ef5613e65401b7cede61ae?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="gap-3 self-stretch my-auto text-2xl">Tạo khóa học</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-7 max-md:grid-cols-1">
        <div className="flex flex-col space-y-7">
          <FormSection
            label="Phân loại"
            required={true}
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/08223d2e0151893bb0c67c9f4e9fae4e42409d304bba895c48f833ba33717bab?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          />
          <FormSection
            label="Giảng viên"
            required={true}
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/08223d2e0151893bb0c67c9f4e9fae4e42409d304bba895c48f833ba33717bab?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          />
          <FormSection
            label="Mô tả"
            required={false}
            textArea={true}
            minHeight="230px"
          />
          <FormSection
            label="Tổng quan khóa học"
            required={false}
            textArea={true}
            minHeight="356px"
          />
        </div>

        <div className="flex flex-col space-y-8">
          <ImageUpload />
          <FormSection
            label="Giá tiền"
            required={true}
          />
          <FormSection
            label="Bạn sẽ học được gì?"
            required={false}
            textArea={true}
            minHeight="356px"
          />
        </div>
      </div>
    </form>
  );
}

export default CourseForm;