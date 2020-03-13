function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgConfirmationNumber = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("defs", null, React.createElement("path", {
    id: "confirmationNumber_svg__a",
    d: "M0 0h24v24H0z"
  })), React.createElement("clipPath", {
    id: "confirmationNumber_svg__b"
  }, React.createElement("use", {
    xlinkHref: "#confirmationNumber_svg__a",
    overflow: "visible"
  })), React.createElement("path", {
    d: "M22 10V6a2 2 0 00-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z",
    clipPath: "url(#confirmationNumber_svg__b)"
  }));
});
SvgConfirmationNumber.displayName = "SvgConfirmationNumber";
SvgConfirmationNumber.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgConfirmationNumber;