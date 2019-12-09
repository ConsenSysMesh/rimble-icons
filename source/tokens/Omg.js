import React from "react";

const SvgOmg = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#1A56F0"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M9.049 12.496a3.046 3.046 0 100 6.092 3.046 3.046 0 000-6.092zm0 5.171a2.125 2.125 0 110-4.252 2.125 2.125 0 010 4.253v-.001zM15.554 6a3.046 3.046 0 100 6.091 3.046 3.046 0 000-6.091zm0 5.17a2.124 2.124 0 110-4.248 2.124 2.124 0 010 4.248zM9.05 6h3.045v.921h-.864A3.048 3.048 0 119.048 6zm2.125 3.045a2.125 2.125 0 10-4.25-.003 2.125 2.125 0 004.25.004v-.001z"
      fill="white"
    />
  </svg>
);

export default SvgOmg;
