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
const SvgArk = React.forwardRef((props, ref) => (
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
      d="M11.96 10.01l-8.21 8.658L11.997 5.25l8.253 13.5-8.29-8.74zm1.191 3.439h-2.566l1.32-1.452 1.246 1.465v-.013zm-4.95 2.383v-.018l1.456-1.49v-.007l4.44-.019 1.498 1.534H8.203z"
      fill="white"
    />
  </Svg>
));
SvgArk.displayName = "SvgArk";
SvgArk.defaultProps = {
  size: 24,
  color: "#F70000"
};
export default SvgArk;
