import React from "react";

const SvgLtc = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#BFBBBB"}
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
      d="M7.82 14.41l-1.07.416.516-2.07 1.083-.434L9.909 6h3.848l-1.14 4.647 1.058-.428-.51 2.062-1.07.428-.636 2.613h5.791L16.595 18H6.94l.881-3.59z"
      fill="white"
    />
  </svg>
);

export default SvgLtc;
