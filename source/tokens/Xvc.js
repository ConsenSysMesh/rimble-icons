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
const SvgXvc = React.forwardRef((props, ref) => (
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
      d="M7.588 8.057H6L7.248 6h3.1v8.038L16.285 6H19.5l-8.357 12H7.588V8.057z"
      fill="white"
    />
  </Svg>
));
SvgXvc.displayName = "SvgXvc";
SvgXvc.defaultProps = {
  size: 24,
  color: "#B50126"
};
export default SvgXvc;
