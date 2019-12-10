var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgCompareArrows = function SvgCompareArrows(props) {
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
      React.createElement("path", { id: "compareArrows_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "compareArrows_svg__b" },
      React.createElement("use", { xlinkHref: "#compareArrows_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#compareArrows_svg__b)",
      d: "M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"
    })
  );
};

SvgCompareArrows.displayName = "SvgCompareArrows";
SvgCompareArrows.defaultProps = {
  size: 24
};
export default SvgCompareArrows;