import React from "react";

const SvgNav = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#7D59B5"}
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
      d="M15.99 16.5h-3.597l-2.849-5.254L7.348 16.5H3.75l3.763-9h3.598l2.959 5.457L16.652 7.5h3.598l-4.26 9z"
      fill="white"
    />
  </svg>
);

export default SvgNav;
