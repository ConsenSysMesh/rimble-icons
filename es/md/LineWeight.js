var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgLineWeight = function SvgLineWeight(props) {
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
      React.createElement("path", { id: "lineWeight_svg__a", d: "M0 0h24v24H0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "lineWeight_svg__b" },
      React.createElement("use", { xlinkHref: "#lineWeight_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#lineWeight_svg__b)",
      d: "M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"
    })
  );
};

SvgLineWeight.displayName = "SvgLineWeight";
SvgLineWeight.defaultProps = {
  size: 24
};
export default SvgLineWeight;