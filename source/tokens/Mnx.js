import React from "react";

const SvgMnx = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#00ADEF"}
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
      d="M11.147 20.24C6.99 19.803 3.75 16.28 3.75 12c0-4.281 3.24-7.804 7.397-8.24v2.528A5.775 5.775 0 006.252 12a5.775 5.775 0 004.895 5.712v2.527zm1.631-16.49c3.923.36 7.053 3.463 7.461 7.378h-2.522a5.775 5.775 0 00-4.938-4.856V3.75zm7.472 9.013c-.361 3.967-3.513 7.125-7.472 7.487v-2.522a5.775 5.775 0 004.955-4.965h2.517z"
      fill="white"
    />
  </svg>
);

export default SvgMnx;
