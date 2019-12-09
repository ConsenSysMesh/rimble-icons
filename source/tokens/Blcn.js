import React from "react";

const SvgBlcn = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#2AABE4"}
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
      d="M5.925 5.25h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm7.5 0h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm0 7.5h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm-7.5 0h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675z"
      fill="white"
    />
  </svg>
);

export default SvgBlcn;
