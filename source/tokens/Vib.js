import React from "react";

const SvgVib = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#FF1F43"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M5.25 5.25H8.4l5.4 9.581V5.25h2.7v13.5h-3.6L5.25 5.25z"
      fill="white"
    />
  </svg>
);

export default SvgVib;
