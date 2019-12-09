import React from "react";

const SvgApex = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#1F4C9F"}
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
      d="M4.5 14.438L12 4.874l7.5 9.563v3.187L12 8.062l-7.5 9.563v-3.188zm7.875.937a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z"
      fill="white"
    />
  </svg>
);

export default SvgApex;
