import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);
const SvgOnt = React.forwardRef((props, ref) => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={"currentcolor"}
    height={props.size}
    width={props.size}
    ref={ref}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.75 18.163L7.483 7.14A6.653 6.653 0 0112.15 5.25c3.645 0 6.6 2.89 6.6 6.457v6.456zM5.25 5.837L16.517 16.86a6.653 6.653 0 01-4.667 1.891c-3.645 0-6.6-2.89-6.6-6.457V5.837z"
      fill="white"
    />
  </Svg>
));
SvgOnt.displayName = "SvgOnt";
SvgOnt.defaultProps = {
  size: 24,
  color: "#32A4BE"
};
export default SvgOnt;
