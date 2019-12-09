import React from "react";

const SvgTzc = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#374851"}
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
      d="M13.275 11.55v5.698c.153-.037.303-.08.45-.13v2.183a7.523 7.523 0 01-3 .091V11.55H8.1v-2.1h7.8v2.1h-2.625zm1.05 7.582v-2.257a5.4 5.4 0 10-4.65 0v2.258a7.5 7.5 0 114.65 0z"
      fill="white"
    />
  </svg>
);

export default SvgTzc;
