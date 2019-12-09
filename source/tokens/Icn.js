import React from "react";

const SvgIcn = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#4C6F8C"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M15.625 5.25h2v13.5h-2V5.25zM12.292 12h2v6.75h-2V12zM8.958 8.625h2V18.75h-2V8.625zm-3.333 6.75h2v3.375h-2v-3.375z"
      fill="white"
    />
  </svg>
);

export default SvgIcn;
