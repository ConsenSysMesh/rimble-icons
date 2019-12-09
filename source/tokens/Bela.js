import React from "react";

const SvgBela = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#13A0F6"}
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
      d="M6.223 8.676a1.817 1.817 0 01-.973-1.61 1.812 1.812 0 113.415-.85 6.668 6.668 0 013.376-.912c3.704 0 6.709 3.01 6.709 6.723s-3.004 6.723-6.71 6.723c-3.705 0-6.709-3.01-6.709-6.723a6.705 6.705 0 01.892-3.351zm5.817 6.659c1.823 0 3.3-1.481 3.3-3.308a3.304 3.304 0 00-3.3-3.307 3.304 3.304 0 00-3.3 3.307 3.304 3.304 0 003.3 3.308z"
      fill="white"
    />
  </svg>
);

export default SvgBela;
