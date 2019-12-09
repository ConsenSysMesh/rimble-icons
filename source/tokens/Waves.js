import React from "react";

const SvgWaves = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#0155FF"}
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
      d="M12 4.5l7.5 7.5-7.5 7.5L4.5 12 12 4.5z"
      fill="white"
    />
  </svg>
);

export default SvgWaves;
