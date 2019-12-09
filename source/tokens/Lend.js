import React from "react";

const SvgLend = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#0FA9C9"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M12.86 15.335L8.773 19.5l-1.166-1.279 2.833-2.887-2.94-2.995 1.255-1.28 4.105 4.276zm2.385-2.394l1.255-1.28-2.94-2.995 2.833-2.887L15.227 4.5l-4.105 4.165 4.123 4.276zm-5.97-2.375l4.124 4.275 1.255-1.279L10.53 9.36l-1.255 1.206z"
      fill="white"
    />
  </svg>
);

export default SvgLend;
