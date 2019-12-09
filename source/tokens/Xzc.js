import React from "react";

const SvgXzc = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#23B852"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M14.044 14.361h2.542v2.223H8.948l9.482-9.489a1.101 1.101 0 00.24-1.18 1.09 1.09 0 00-1.008-.665H6.339A1.08 1.08 0 005.25 6.339v8.022l4.706-4.71H7.414V7.416h7.626l-9.47 9.489a1.101 1.101 0 00-.24 1.18 1.09 1.09 0 001.008.665h11.325a1.088 1.088 0 001.087-1.089v-8.01l-4.706 4.71z"
      fill="white"
    />
  </svg>
);

export default SvgXzc;
