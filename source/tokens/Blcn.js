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
const SvgBlcn = React.forwardRef((props, ref) => (
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
      d="M5.925 5.25h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm7.5 0h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm0 7.5h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm-7.5 0h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675z"
      fill="white"
    />
  </Svg>
));
SvgBlcn.displayName = "SvgBlcn";
SvgBlcn.defaultProps = {
  size: 24,
  color: "#2AABE4"
};
export default SvgBlcn;
