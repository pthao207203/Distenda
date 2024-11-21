import React from "react";

export const Property1Diamond = ({ className }) => {
  return (
    <svg
      className={`property-1-diamond ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 31 30"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="38"
        id="mask0_1_133"
        maskUnits="userSpaceOnUse"
        width="38"
        x="-4"
        y="-4"
      >
        <rect
          className="rect"
          fill="#D9D9D9"
          height="38"
          width="38"
          x="-4"
          y="-4"
        />
      </mask>

      <g className="g" mask="url(#mask0_1_133)">
        <path
          className="path"
          d="M15 29L-1 10.3333L3.8 1H26.2L31 10.3333L15 29ZM10.52 9.16667H19.48L16.48 3.33333H13.52L10.52 9.16667ZM13.8 23.9833V11.5H3.12L13.8 23.9833ZM16.2 23.9833L26.88 11.5H16.2V23.9833ZM22.16 9.16667H27.6L24.6 3.33333H19.16L22.16 9.16667ZM2.4 9.16667H7.84L10.84 3.33333H5.4L2.4 9.16667Z"
          fill="black"
        />
      </g>
    </svg>
  );
};
