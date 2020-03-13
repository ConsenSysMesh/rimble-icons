function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgWeekend = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("defs", null, React.createElement("path", {
    id: "weekend_svg__a",
    d: "M0 0h24v24H0z"
  })), React.createElement("clipPath", {
    id: "weekend_svg__b"
  }, React.createElement("use", {
    xlinkHref: "#weekend_svg__a",
    overflow: "visible"
  })), React.createElement("path", {
    d: "M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z",
    clipPath: "url(#weekend_svg__b)",
    fill: "#010101"
  }));
});
SvgWeekend.displayName = "SvgWeekend";
SvgWeekend.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgWeekend;