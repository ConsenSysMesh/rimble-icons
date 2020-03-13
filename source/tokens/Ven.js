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
const SvgVen = React.forwardRef((props, ref) => (
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
      d="M11.053 18.55L5.28 6.785a.285.285 0 01.255-.41h2.001c.107 0 .208.06.255.154l4.216 8.536a1.024 1.024 0 001.84 0l4.202-8.529a.286.286 0 01.256-.154h.248c.148 0 .242.154.175.282L12.893 18.55a1.024 1.024 0 01-1.84 0z"
      fill="white"
    />
  </Svg>
));
SvgVen.displayName = "SvgVen";
SvgVen.defaultProps = {
  size: 24,
  color: "#15BDFF"
};
export default SvgVen;
