import React from "react";

const SvgHuc = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#FFC018"}
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
      d="M8.625 10.875h6.75V7.5h2.25v12h-2.25v-6.375h-6.75V16.5h-2.25v-12h2.25v6.375z"
      fill="white"
    />
  </svg>
);

export default SvgHuc;
