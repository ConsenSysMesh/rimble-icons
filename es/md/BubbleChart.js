function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgBubbleChart = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("circle", {
    cx: 7.2,
    cy: 14.4,
    r: 3.2
  }), React.createElement("circle", {
    cx: 14.8,
    cy: 18,
    r: 2
  }), React.createElement("circle", {
    cx: 15.2,
    cy: 8.8,
    r: 4.8
  }));
});
SvgBubbleChart.displayName = "SvgBubbleChart";
SvgBubbleChart.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgBubbleChart;