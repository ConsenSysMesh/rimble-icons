import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);

const SvgGbyte = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#302C2C"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z"
      fill="white"
    />
  </Svg>
);

SvgGbyte.displayName = "SvgGbyte";
SvgGbyte.defaultProps = {
  size: 24
};
export default SvgGbyte;
