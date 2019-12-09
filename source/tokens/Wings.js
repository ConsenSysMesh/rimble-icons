import React from "react";

const SvgWings = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#0DC9F7"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M14.178 11.804l-2.284 1.773-.935-3.243-5.418-1.452 7.11.365 1.527 2.557z"
      fill="white"
      fillOpacity={0.305}
    />
    <path
      d="M6.203 17.995l12.236-9.497 1.061 2.36-1.391-.386-.049 2.448-11.857 5.075z"
      fill="white"
      fillOpacity={0.7}
    />
    <path
      d="M17.097 13.335l-3.56-6.12L4.5 6.75l6.887 1.846 1.868 6.367 3.842-1.628z"
      fill="white"
    />
  </svg>
);

export default SvgWings;
