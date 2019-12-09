import React from "react";

const SvgLkk = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#9D01EB"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M7.504 19.5v-2.742L12 12.18l4.482 4.579V19.5L12 14.92 7.504 19.5zM3.75 10.225h6.352L12 12.18H5.648L3.75 10.225zm16.5 0l-1.898 1.954H12V3.75l1.898 1.94v4.535h6.352z"
      fill="white"
    />
  </svg>
);

export default SvgLkk;
