function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgLink = React.forwardRef(function (props, ref) {
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
    d: "M11.25 13.963v1.787a.75.75 0 101.5 0v-1.787a1.126 1.126 0 10-1.5 0zM7.5 10.5V9a4.5 4.5 0 019 0v1.5a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75zm9 0H9.375V9.075c0-1.491 1.175-2.7 2.625-2.7s2.625 1.209 2.625 2.7V10.5H12h4.5z",
    fill: "white"
  }));
});
SvgLink.displayName = "SvgLink";
SvgLink.defaultProps = {
  size: 24,
  color: "#01A6FB"
};
export default SvgLink;