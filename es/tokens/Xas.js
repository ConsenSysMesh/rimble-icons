function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgXas = React.forwardRef(function (props, ref) {
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
    d: "M19.494 10.853l-7.102 8.258-.319.389-7.568-8.563.024-.01-.029-.005 2.941-4.918.002.002L7.441 6h9.191l-.002.005 2.87 4.847-.006.001zm-9.852.345l-1.627 2.755 4.013 4.584 4.023-4.621-1.592-2.727-4.817.008zm-2.083 2.234l1.32-2.234-3.272.005 1.952 2.23zm7.292-2.884l3.715-.006-2.332-3.906-3.662.008 2.279 3.904zm3.578.634l-3.205.006 1.285 2.201 1.92-2.207zm-4.343-.633l-2.018-3.458-2.048 3.465 4.066-.006zm-6.3-3.895l-2.324 3.91 3.795-.007 2.31-3.91-3.78.007z",
    fill: "white"
  }));
});
SvgXas.displayName = "SvgXas";
SvgXas.defaultProps = {
  size: 24,
  color: "#FAA00D"
};
export default SvgXas;