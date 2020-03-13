function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgDcr = React.forwardRef(function (props, ref) {
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
    d: "M11.142 13.215h3.315a2.24 2.24 0 002.233-2.247 2.24 2.24 0 00-2.233-2.246h-1.055l-2.26-1.972h3.315a4.201 4.201 0 014.116 3.409 4.224 4.224 0 01-2.534 4.717l2.613 2.282H15.66l-4.517-3.944v.001zm1.618-2.52H9.445A2.24 2.24 0 007.21 12.94a2.24 2.24 0 002.234 2.247H10.5l2.259 1.972H9.445a4.201 4.201 0 01-4.116-3.408 4.224 4.224 0 012.534-4.718L5.251 6.75h2.994l4.515 3.945z",
    fill: "white"
  }));
});
SvgDcr.displayName = "SvgDcr";
SvgDcr.defaultProps = {
  size: 24,
  color: "#2ED6A1"
};
export default SvgDcr;