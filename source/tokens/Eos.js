import React from "react";

const SvgEos = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "black"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M8.164 8.707L12 20.75l-5.691-3.565 1.855-8.478L12 3.468v3.675L6.309 17.185h11.387l-5.69-10.042V3.468l3.834 5.24 1.856 8.477-5.69 3.565L15.84 8.707"
      stroke="white"
      strokeWidth={0.64}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEos;
