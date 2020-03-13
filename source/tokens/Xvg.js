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
const SvgXvg = React.forwardRef((props, ref) => (
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
      d="M7.207 7.751L6 5.25h12l-1.194 2.501H18L11.963 20.25 6 7.751h1.207zm0 0l4.829 9.998 4.77-9.998H7.208z"
      fill="white"
    />
    <path opacity={0.504} d="M12 18.375L6 5.25h12l-6 13.125z" fill="white" />
  </Svg>
));
SvgXvg.displayName = "SvgXvg";
SvgXvg.defaultProps = {
  size: 24,
  color: "#00CBFF"
};
export default SvgXvg;
