function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgOnt = React.forwardRef(function (props, ref) {
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
    d: "M18.75 18.163L7.483 7.14A6.653 6.653 0 0112.15 5.25c3.645 0 6.6 2.89 6.6 6.457v6.456zM5.25 5.837L16.517 16.86a6.653 6.653 0 01-4.667 1.891c-3.645 0-6.6-2.89-6.6-6.457V5.837z",
    fill: "white"
  }));
});
SvgOnt.displayName = "SvgOnt";
SvgOnt.defaultProps = {
  size: 24,
  color: "#32A4BE"
};
export default SvgOnt;