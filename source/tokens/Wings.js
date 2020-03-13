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
const SvgWings = React.forwardRef((props, ref) => (
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
      d="M14.178 11.804l-2.284 1.773-.935-3.243-5.418-1.452 7.11.365 1.527 2.557z"
      fill="white"
      fillOpacity={0.305}
    />
    <path
      d="M6.203 17.995l12.236-9.497 1.061 2.36-1.391-.386-.049 2.448-11.857 5.075z"
      fill="white"
      fillOpacity={0.7}
    />
    <path
      d="M17.097 13.335l-3.56-6.12L4.5 6.75l6.887 1.846 1.868 6.367 3.842-1.628z"
      fill="white"
    />
  </Svg>
));
SvgWings.displayName = "SvgWings";
SvgWings.defaultProps = {
  size: 24,
  color: "#0DC9F7"
};
export default SvgWings;
