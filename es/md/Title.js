var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgTitle = function SvgTitle(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    React.createElement("path", { d: "M5 4v3h5.5v12h3V7H19V4z" }),
    React.createElement("path", { fill: "none", d: "M0 0h24v24H0V0z" })
  );
};

SvgTitle.displayName = "SvgTitle";
SvgTitle.defaultProps = {
  size: 24
};
export default SvgTitle;