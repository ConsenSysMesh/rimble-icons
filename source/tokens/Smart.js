import React from "react";

const SvgSmart = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#FAC000"}
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
      d="M10.65 8.182h5.67v-2.5H12.9V4.5h-1.44v1.182H7.5v2.59l3.96 3.41-3.96 4v2.772h3.96V19.5h1.44v-1.046h3.6v-2.5h-5.94l4.275-4.272-4.185-3.5z"
      fill="white"
    />
  </svg>
);

export default SvgSmart;
