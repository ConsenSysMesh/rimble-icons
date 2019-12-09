import React from "react";

const SvgCny = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#FF4314"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.878 6H17.24v1.444H6.878V6zm-1.155 4.23h12.805v1.46h-3.922v4.88c0 .375.162.562.502.562h1.629c.178 0 .326-.115.414-.331.104-.231.178-.94.208-2.108l1.391.433c-.104 1.631-.296 2.599-.563 2.903-.266.288-.65.447-1.17.447h-2.352c-1.052 0-1.57-.534-1.57-1.589V11.69h-2.19v.288c-.074 1.834-.488 3.306-1.243 4.404-.74 1.01-1.925 1.805-3.583 2.368l-.829-1.27c1.599-.55 2.665-1.242 3.227-2.051.563-.896.858-2.036.918-3.45v-.29H5.724v-1.458z"
      fill="white"
    />
  </svg>
);

export default SvgCny;
