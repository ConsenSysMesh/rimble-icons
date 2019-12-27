var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgStarHalf = function SvgStarHalf(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "starHalf_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "starHalf_svg__b" },
      React.createElement("use", { xlinkHref: "#starHalf_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#starHalf_svg__b)",
      d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
    })
  );
};

SvgStarHalf.displayName = "SvgStarHalf";
SvgStarHalf.defaultProps = {
  size: 24
};
export default SvgStarHalf;