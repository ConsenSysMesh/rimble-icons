var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgEqualizer = function SvgEqualizer(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    React.createElement("path", { d: "M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" })
  );
};

SvgEqualizer.displayName = "SvgEqualizer";
SvgEqualizer.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgEqualizer;