import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);

const SvgTnc = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={"currentcolor"}
    height={props.size}
    width={props.size}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.67 10.353l4.224 7.272H6.184l1.403-2.327 6.309.001-1.599-2.61 1.372-2.336zm-4.313 1.692l4.295-7.14L19.5 14.75h-2.808l-3.09-5.37-1.5 2.666-2.745-.001zm3.664 2.714L4.5 14.72l5.855-9.844 1.395 2.36-3.227 5.188h3.125l1.373 2.336z"
      fill="white"
    />
  </Svg>
);

SvgTnc.displayName = "SvgTnc";
SvgTnc.defaultProps = {
  size: 24,
  color: "#FF439B"
};
export default SvgTnc;
