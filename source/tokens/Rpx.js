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
const SvgRpx = React.forwardRef((props, ref) => (
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
      d="M19.272 11.799c.54 0 .978.428.978.956a.967.967 0 01-.978.956.978.978 0 01-.909-.603h-2.79l-1.029 1.83c-.17.301-.634.212-.674-.13l-.231-1.954-.855 6.34c-.057.422-.688.402-.717-.022l-.701-10.25-.743 6.79c-.045.405-.64.426-.712.024l-.787-4.317-.363 1.422a.36.36 0 01-.349.267H4.86a.356.356 0 01-.36-.353c0-.195.161-.352.36-.352h3.27l.704-2.753c.095-.37.636-.35.705.024l.637 3.501.914-8.36c.047-.428.689-.416.718.014l.736 10.755.76-5.643c.056-.412.667-.408.716.005l.436 3.686.588-1.047a.36.36 0 01.316-.182h3.003a.979.979 0 01.909-.604z"
      fill="white"
    />
  </Svg>
));
SvgRpx.displayName = "SvgRpx";
SvgRpx.defaultProps = {
  size: 24,
  color: "#8D181B"
};
export default SvgRpx;
