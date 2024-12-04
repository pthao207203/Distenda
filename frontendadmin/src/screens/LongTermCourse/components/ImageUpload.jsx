import * as React from "react";

function ImageUpload() {
  return (
    <div className="flex flex-col mt-8 max-w-full min-h-[395px] w-[627px]">
      <label className="max-md:max-w-full">Ảnh minh họa</label>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/046c8d06477afe4516a9890198f966e228f2abf477fc919e7e0d46f0498dadb7?apiKey=7a79403a23cb489f853e4845c47ede19&"
        alt="Upload course illustration"
        className="object-contain flex-1 gap-2.5 py-2.5 mt-2 w-full rounded-lg aspect-[1.71] max-md:max-w-full"
      />
    </div>
  );
}

export default ImageUpload;