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
const SvgNuls = React.forwardRef((props, ref) => (
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
      d="M10.802 14.52L12 16.098V19.5l-4.5-1.997V8.714c0-.13.058-.253.159-.34l.512-.438a.477.477 0 01.693.072l4.098 5.374 2.264 1.384v-7.41l-2-.998-.098 4.647L12.069 9.6l-.048-5.1L16.5 6.584v8.748l-1.018.839-3.205-1.79-3.558-4.668-.049 7.09 2.119 1.086.013-3.369z"
      fill="white"
    />
  </Svg>
));
SvgNuls.displayName = "SvgNuls";
SvgNuls.defaultProps = {
  size: 24,
  color: "#82BD39"
};
export default SvgNuls;
