import React from "react";

const SvgVen = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#15BDFF"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M11.053 18.55L5.28 6.785a.285.285 0 01.255-.41h2.001c.107 0 .208.06.255.154l4.216 8.536a1.024 1.024 0 001.84 0l4.202-8.529a.286.286 0 01.256-.154h.248c.148 0 .242.154.175.282L12.893 18.55a1.024 1.024 0 01-1.84 0z"
      fill="white"
    />
  </svg>
);

export default SvgVen;
