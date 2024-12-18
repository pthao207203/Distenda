import { Editor } from "@tinymce/tinymce-react";
import React from "react";

function EditableDetail({ id, title, value, onChange, editorRef }) {
  return (
    <div className="mt-6">
      <div className="text-xl font-semibold text-neutral-900 text-opacity-50 leading-none max-md:max-w-full">
        {title}
      </div>
      <Editor
        id={id}
        apiKey="ra8co6ju1rrspizsq3cqhi3e8p7iknltlh2v77d58cbrys8m"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        value={value} // Giá trị hiện tại
        onEditorChange={onChange} // Hàm xử lý khi nội dung thay đổi
        init={{
          height: 400, // Chiều cao của editor
          menubar: false, // Ẩn thanh menu
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </div>
  );
}


function ContentSection({ exercise, editorRef, handleChange, handleEditorChange }) {
  return (
    <>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        {/* Tiêu đề */}
        <div className="text-xl font-semibold text-neutral-900 text-opacity-50 leading-none max-md:max-w-full">
          Tên bài tập
        </div>

        {/* Nội dung */}
        <input
          required
          id="ExerciseName"
          type="text"
          value={exercise?.ExerciseName}
          onChange={handleChange}
          className="w-full mt-3 px-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 h-[63px] focus:ring-blue-500"
        />
      </div>

      <div className="">
        <EditableDetail
          id="ExerciseQuestion"
          title="Đề bài"
          value={exercise?.ExerciseQuestion}
          onChange={handleEditorChange}
          editorRef={editorRef}
        />
        <EditableDetail
          id="ExerciseSample"
          title="Template"
          value={exercise?.ExerciseSample}
          onChange={handleEditorChange}
          editorRef={editorRef}
        />
        <EditableDetail
          id="ExerciseAnswer"
          title="Đáp án"
          value={exercise?.ExerciseAnswer}
          onChange={handleEditorChange}
          editorRef={editorRef}
        />
      </div>
    </>
  );
}

export default ContentSection;
