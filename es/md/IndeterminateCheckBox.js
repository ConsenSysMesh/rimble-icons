var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgIndeterminateCheckBox = function SvgIndeterminateCheckBox(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "indeterminateCheckBox_svg__a", d: "M0 0h24v24H0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "indeterminateCheckBox_svg__b" },
      React.createElement("use", { xlinkHref: "#indeterminateCheckBox_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#indeterminateCheckBox_svg__b)",
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
    })
  );
};

SvgIndeterminateCheckBox.displayName = "SvgIndeterminateCheckBox";
SvgIndeterminateCheckBox.defaultProps = {
  size: 24
};
export default SvgIndeterminateCheckBox;