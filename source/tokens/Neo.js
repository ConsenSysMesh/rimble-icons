import React from "react";

const SvgNeo = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#58BF00"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M18.75 16.935l-5.242-2.443V9.075l5.242-1.859v9.718zM11.117 19.5L6 17.116V7.468l5.117 2.386V19.5zm7.508-12.632l-.085.03-5.032 1.786-.126.045-2.133.756-5.047-2.352 7.18-2.548.063-.022.132-.047.047-.016 5.047 2.352-.047.016z"
      fill="white"
    />
  </svg>
);

export default SvgNeo;
