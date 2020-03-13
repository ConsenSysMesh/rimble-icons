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
const SvgXmr = React.forwardRef((props, ref) => (
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
      d="M11.977 3.926a8.112 8.112 0 017.7 10.692h-2.419v-6.82l-5.28 5.28-5.28-5.28v6.82h-2.42a8.303 8.303 0 01-.418-2.574 8.112 8.112 0 018.118-8.118zm-1.209 10.339L12 15.476l1.21-1.21 2.288-2.31v4.29h3.41a8.106 8.106 0 01-6.93 3.894 8.13 8.13 0 01-6.93-3.894h3.41v-4.29l2.31 2.31v-.001z"
      fill="white"
    />
  </Svg>
));
SvgXmr.displayName = "SvgXmr";
SvgXmr.defaultProps = {
  size: 24,
  color: "#FF6600"
};
export default SvgXmr;
