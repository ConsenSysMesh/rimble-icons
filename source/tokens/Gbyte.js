import React from "react";

const SvgGbyte = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#302C2C"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z"
      fill="white"
    />
  </svg>
);

export default SvgGbyte;
