import React from "react";

const SvgEth = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#0C0C0D"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M12 15.243l4.5-2.662-4.5 6.343-4.5-6.342 4.5 2.662v-.001zm0-10.74l4.5 7.087-4.5 2.662-4.5-2.662L12 4.502z"
      fill="white"
    />
  </svg>
);

export default SvgEth;
