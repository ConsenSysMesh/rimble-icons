function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgMod = React.forwardRef(function (props, ref) {
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
    opacity: 0.5,
    d: "M17.239 15.755V6.06l-4.734 4.837 4.734 4.858z",
    fill: "white"
  }), React.createElement("path", {
    d: "M6.75 5.25l.228.234 6.35 6.506L6.75 18.74V5.25z",
    fill: "white"
  }));
});
SvgMod.displayName = "SvgMod";
SvgMod.defaultProps = {
  size: 24,
  color: "#09547D"
};
export default SvgMod;