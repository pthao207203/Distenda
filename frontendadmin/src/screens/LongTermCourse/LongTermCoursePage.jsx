import * as React from "react";
import FormField from "./components/FormField";
import ImageUpload from "./components/ImageUpload";
import TextArea from "./components/TextArea";
// import Header from "../../layouts/private/Header";
import NavigationBar from "./components/NavigationBar";

function CourseForm() {
  const formFields = [
    { label: "Tên khóa học", required: true },
    { label: "Phân loại", required: true, hasIcon: true },
    { label: "Giảng viên", required: true, hasIcon: true },
    { label: "Giá tiền", required: true }
  ];

  const textAreas = [
    { label: "Mô tả", minHeight: "230px" },
    { label: "Tổng quan khóa học", minHeight: "356px" },
    { label: "Bạn sẽ học được gì?", minHeight: "356px" }
  ];

  return (
    <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <NavigationBar />
      <section className="flex flex-col px-16 py-8 mt-1.5 bg-white max-md:px-5 max-md:max-w-full w-full">
        <div className="max-md:max-w-full w-full">
          <div className="flex gap-8 max-md:flex-col">
            <div className="flex flex-col w-7/12 max-md:w-full">
              {formFields.slice(0, 3).map((field, index) => (
                <FormField key={index} {...field} />
              ))}
              <TextArea {...textAreas[0]} />
            </div>

            <div className="flex flex-col w-5/12 max-md:w-full">
              <button className="flex gap-3 justify-center items-start self-start px-3 py-5 text-3xl text-white rounded-lg bg-[#6C8299] max-md:mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/9c09cb59c17f1b75dfebbaee00f317fc4e0ec3130264db3528635a1111ca2713?apiKey=7a79403a23cb489f853e4845c47ede19&"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <span className="gap-2.5 self-stretch my-auto">Tạo khóa học</span>
              </button>
              <ImageUpload />
              <FormField {...formFields[3]} />
            </div>
          </div>
        </div>

        <div className="flex gap-8 mt-7 max-md:flex-col max-md:max-w-full">
          <div className="flex flex-col w-7/12 max-md:w-full">
            <TextArea {...textAreas[1]} />
          </div>
          <div className="flex flex-col w-5/12 max-md:w-full">
            <TextArea {...textAreas[2]} />
          </div>
        </div>
      </section>
</main>

  );
}

export default CourseForm;
