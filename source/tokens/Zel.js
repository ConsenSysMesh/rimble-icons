import React from "react";

const SvgZel = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#183C87"}
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
      d="M3.75 11.711l3.371-1.903 3.37 1.903v3.636l-3.37 1.903-3.371-1.903V11.71zm9.758 0l3.37-1.903 3.372 1.903v3.636l-3.371 1.903-3.37-1.903V11.71h-.002zm-.354 3.158l-1.183.65-1.124-.617v-3.48L7.772 9.685V8.422L11.97 6l4.198 2.422V9.72l-3.016 1.702v3.447z"
      fill="white"
    />
  </svg>
);

export default SvgZel;
