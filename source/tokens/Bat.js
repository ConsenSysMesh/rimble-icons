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
const SvgBat = React.forwardRef((props, ref) => (
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
      d="M4.5 17.625l7.538-12.75L19.5 17.608l-15 .017zm7.52-7.59l-3.08 5.09h6.176l-3.096-5.09z"
      fill="white"
    />
  </Svg>
));
SvgBat.displayName = "SvgBat";
SvgBat.defaultProps = {
  size: 24,
  color: "#FF5000"
};
export default SvgBat;
