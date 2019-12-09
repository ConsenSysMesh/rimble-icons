import React from "react";

const SvgWpr = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#FFE600"}
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
      d="M2.995 4.069a12.072 12.072 0 011.987-1.804l3.34 11.938L9.8 7.875h2.805l1.479 6.329 1.753-6.329h2.812l.026.113 3.055 11.035a12.071 12.071 0 01-1.912 2.081l-2.578-9.307-1.47 5.308-.026.113h-3.14l-1.402-5.2-1.402 5.2h-3.14l-.026-.113L2.995 4.07z"
      fill="white"
    />
  </svg>
);

export default SvgWpr;
