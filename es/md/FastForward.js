var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgFastForward = function SvgFastForward(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    React.createElement("path", { d: "M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" })
  );
};

SvgFastForward.displayName = "SvgFastForward";
SvgFastForward.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgFastForward;