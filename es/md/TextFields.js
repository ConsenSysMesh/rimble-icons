var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgTextFields = function SvgTextFields(props) {
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
      React.createElement("path", { id: "textFields_svg__a", d: "M24 24H0V0h24v24z" })
    ),
    React.createElement(
      "clipPath",
      { id: "textFields_svg__b" },
      React.createElement("use", { xlinkHref: "#textFields_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#textFields_svg__b)",
      d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
    })
  );
};

SvgTextFields.displayName = "SvgTextFields";
SvgTextFields.defaultProps = {
  size: 24
};
export default SvgTextFields;