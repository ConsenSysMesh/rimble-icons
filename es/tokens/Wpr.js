function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgWpr = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size,
    ref: ref
  }), React.createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.995 4.069a12.072 12.072 0 011.987-1.804l3.34 11.938L9.8 7.875h2.805l1.479 6.329 1.753-6.329h2.812l.026.113 3.055 11.035a12.071 12.071 0 01-1.912 2.081l-2.578-9.307-1.47 5.308-.026.113h-3.14l-1.402-5.2-1.402 5.2h-3.14l-.026-.113L2.995 4.07z",
    fill: "white"
  }));
});
SvgWpr.displayName = "SvgWpr";
SvgWpr.defaultProps = {
  size: 24,
  color: "#FFE600"
};
export default SvgWpr;