import React from "react";

const SvgSalt = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#1BEEF4"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M12.375 7.834l4.353 9.16H8.022l4.353-9.16zm0-4.084l-7.125 15H19.5l-7.125-15z"
      fill="white"
    />
  </svg>
);

export default SvgSalt;
