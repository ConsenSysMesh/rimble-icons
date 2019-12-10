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

const SvgWaves = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#0155FF"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4.5l7.5 7.5-7.5 7.5L4.5 12 12 4.5z"
      fill="white"
    />
  </Svg>
);

SvgWaves.displayName = "SvgWaves";
SvgWaves.defaultProps = {
  size: 24
};
export default SvgWaves;
