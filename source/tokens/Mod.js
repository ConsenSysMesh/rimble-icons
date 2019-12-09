import React from "react";

const SvgMod = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#09547D"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      opacity={0.5}
      d="M17.239 15.755V6.06l-4.734 4.837 4.734 4.858z"
      fill="white"
    />
    <path d="M6.75 5.25l.228.234 6.35 6.506L6.75 18.74V5.25z" fill="white" />
  </svg>
);

export default SvgMod;
