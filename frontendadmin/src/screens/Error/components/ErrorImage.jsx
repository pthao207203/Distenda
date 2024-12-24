import * as React from "react";

export function ErrorImage({ imageSrc, imageAlt }) {
  return (
    <img
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className="object-contain text-white mt-52 max-w-full aspect-[2.27] w-[968px] max-md:mt-10"
    />
  );
}
