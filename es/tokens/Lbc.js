function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgLbc = React.forwardRef(function (props, ref) {
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
    d: "M18.132 12.888l-.598-.15.182-.727 1.863.466-.465 1.864-.728-.182.162-.646-6.654 4.12-7.38-3.688v-2.813l7.668-4.796 7.031 3.43v1.158l-7.319 4.547-5.435-2.695.333-.672 5.062 2.51 6.61-4.107v-.272l-6.237-3.042-6.962 4.354v1.935l6.59 3.293 6.277-3.887z",
    fill: "white"
  }));
});
SvgLbc.displayName = "SvgLbc";
SvgLbc.defaultProps = {
  size: 24,
  color: "#006149"
};
export default SvgLbc;