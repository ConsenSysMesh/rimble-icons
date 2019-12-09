import React from "react";

const SvgAct = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#767DFF"}
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
      d="M10.328 4.875h3.345a.653.653 0 01.569.333l5.18 9.24a.651.651 0 010 .637l-1.658 2.956a.653.653 0 01-.569.334H6.805a.652.652 0 01-.57-.334L4.58 15.085a.653.653 0 010-.638l5.18-9.239a.653.653 0 01.569-.333zM12 8.551l-3.49 6.215h6.98L12 8.551z"
      fill="white"
    />
  </svg>
);

export default SvgAct;
