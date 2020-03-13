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
const SvgMkr = React.forwardRef((props, ref) => (
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
      d="M5.878 9.042v7.833H4.5v-10.5l7.281 5.27v5.23h-1.379v-4.558L5.88 9.042zm7.72 3.275v4.558h-1.379v-5.23l7.281-5.27v10.5h-1.378V9.042l-4.524 3.275z"
      fill="white"
    />
  </Svg>
));
SvgMkr.displayName = "SvgMkr";
SvgMkr.defaultProps = {
  size: 24,
  color: "#1ABC9C"
};
export default SvgMkr;
