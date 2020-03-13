function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgOst = React.forwardRef(function (props, ref) {
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
    d: "M17.311 17.998c-1.326-1.295-2.962-1.83-4.772-1.942-1.54-.095-3.012.163-4.389.868a5.36 5.36 0 00-1.377 1c-.026.027-.057.051-.084.076a7.957 7.957 0 01-.783-11.62c3.24-3.49 8.88-3.51 12.15-.036a7.953 7.953 0 01-.745 11.654zm-8.296-6.152c0 1.621 1.327 2.925 2.978 2.928 1.66.003 3.002-1.305 3.004-2.924.002-1.614-1.35-2.936-3-2.932-1.647.003-2.983 1.316-2.982 2.928z",
    fill: "white"
  }));
});
SvgOst.displayName = "SvgOst";
SvgOst.defaultProps = {
  size: 24,
  color: "#BBDFD0"
};
export default SvgOst;