var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgShortText = function SvgShortText(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "shortText_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "shortText_svg__b" },
      React.createElement("use", { xlinkHref: "#shortText_svg__a", overflow: "visible" })
    ),
    React.createElement("path", { d: "M4 9h16v2H4zm0 4h10v2H4z", clipPath: "url(#shortText_svg__b)" })
  );
};

SvgShortText.displayName = "SvgShortText";
SvgShortText.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgShortText;