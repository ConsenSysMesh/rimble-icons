import React from "react";

const SvgUtk = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#30367A"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M10.765 16.724V6.77h-2.89V4.5h8.25v2.271h-2.89v9.953h-2.47zM10.1 19.5c-1.492 0-2.198-.717-2.198-2.233V7.421h2.17v9.744c0 .24.08.32.315.32h3.254c.236 0 .315-.08.315-.32V7.422h2.169v9.845c0 1.516-.707 2.233-2.197 2.233h-3.829z"
      fill="white"
    />
  </svg>
);

export default SvgUtk;
