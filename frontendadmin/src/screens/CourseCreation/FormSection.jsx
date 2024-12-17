import React from 'react';
import { Editor } from "@tinymce/tinymce-react";

function FormSection({ id, value, label, required, textArea, minHeight, editorRef, onChange }) {

  return (
    <div className="flex flex-col w-full text-xl font-medium leading-none text-neutral-900">
      <label htmlFor={id} className="max-md:max-w-full">
        {label} {required && <span className="text-red-600" aria-hidden="true">*</span>}
      </label>
      <div className="flex gap-2.5 mt-2 w-full" style={{ minHeight: minHeight || '63px' }}>
        {textArea ? (
          <Editor
            id={id}
            apiKey="ra8co6ju1rrspizsq3cqhi3e8p7iknltlh2v77d58cbrys8m"
            onInit={(_evt, editor) => (editorRef.current = editor)}
            value={value} // Giá trị hiện tại
            onEditorChange={(content, editor) => onChange(editor)} // Hàm xử lý khi nội dung thay đổi
            init={{
              height: minHeight, // Chiều cao của editor
              width: "100%",
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
        ) : (
          <input
            id={id}
            type="text"
            required
            className="flex gap-2.5 mt-2 pl-5 w-full rounded-lg border border-solid border-slate-500 border-opacity-80 min-h-[63px] max-md:max-w-full"
            aria-required="true"
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}

export default FormSection;