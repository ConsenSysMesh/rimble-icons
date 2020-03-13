function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgKcs = React.forwardRef(function (props, ref) {
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
    d: "M10.155 12l3.88 3.998 2.45-2.523a1.084 1.084 0 011.565 0 1.165 1.165 0 010 1.614l-3.232 3.33a1.093 1.093 0 01-1.566 0L8.59 13.615v2.856c0 .627-.499 1.141-1.107 1.141-.612 0-1.108-.511-1.108-1.141V7.53c0-.63.496-1.142 1.108-1.142.611 0 1.108.512 1.108 1.142v2.856l4.662-4.804a1.092 1.092 0 011.566 0l3.232 3.33a1.165 1.165 0 010 1.613 1.084 1.084 0 01-1.567 0l-2.449-2.523L10.155 12zm3.882-1.142c.612 0 1.108.511 1.108 1.142 0 .63-.496 1.142-1.108 1.142-.612 0-1.109-.511-1.109-1.142 0-.63.497-1.142 1.109-1.142z",
    fill: "white"
  }));
});
SvgKcs.displayName = "SvgKcs";
SvgKcs.defaultProps = {
  size: 24,
  color: "#0093DD"
};
export default SvgKcs;