function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgPivx = React.forwardRef(function (props, ref) {
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
    d: "M7.875 9.18h4.615v.942H7.875v-.941zm9 .443c0 2.23-1.582 3.671-3.771 3.671h-3.031V18h-1.2v-5.77h4.068c1.631 0 2.696-.969 2.696-2.607 0-1.618-1.065-2.56-2.677-2.56h-1.266l-3.032.01V6h4.432c2.198 0 3.78 1.393 3.78 3.623h.001v0z",
    fill: "white",
    stroke: "white"
  }));
});
SvgPivx.displayName = "SvgPivx";
SvgPivx.defaultProps = {
  size: 24,
  color: "#5E4778"
};
export default SvgPivx;