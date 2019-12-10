var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgPanTool = function SvgPanTool(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "panTool_svg__a", d: "M0 0h24v24H0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "panTool_svg__b" },
      React.createElement("use", { xlinkHref: "#panTool_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#panTool_svg__b)",
      d: "M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"
    })
  );
};

SvgPanTool.displayName = "SvgPanTool";
SvgPanTool.defaultProps = {
  size: 24
};
export default SvgPanTool;