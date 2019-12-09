import React from "react";

const SvgEmc = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#B49FFC"}
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
      d="M6 6v2.4h4.8v2.4H6v2.4h7.2V8.4h2.4v7.2H6V18h12V6H6z"
      fill="white"
    />
  </svg>
);

export default SvgEmc;
