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

const SvgStorm = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={props.color ? "currentcolor" : "#080D98"}
    height={props.size}
    width={props.size}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 4.5l-9.022 6.188 4.557 2.906L6.75 19.5l9.977-6.906-4.496-2.906L17.25 4.5z"
      fill="white"
    />
  </Svg>
);

SvgStorm.displayName = "SvgStorm";
SvgStorm.defaultProps = {
  size: 24
};
export default SvgStorm;
