import React from "react";

const SvgArdr = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#3C87C7"}
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
      d="M11.912 12.893l1.327 1.733-3.864 2.624 2.537-4.357zM12 4.5l2.045 3.356-5.454 9.394H4.5L12 4.5zm0 7.382l2.727-2.014L19.5 17.25h-3.409L12 11.882z"
      fill="white"
    />
  </svg>
);

export default SvgArdr;
