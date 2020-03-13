function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgQueuePlayNext = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("defs", null, React.createElement("path", {
    id: "queuePlayNext_svg__a",
    d: "M0 0h24v24H0V0z"
  })), React.createElement("clipPath", {
    id: "queuePlayNext_svg__b"
  }, React.createElement("use", {
    xlinkHref: "#queuePlayNext_svg__a",
    overflow: "visible"
  })), React.createElement("path", {
    clipPath: "url(#queuePlayNext_svg__b)",
    d: "M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h2v-2H3V5h18v8h2V5a2 2 0 00-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"
  }));
});
SvgQueuePlayNext.displayName = "SvgQueuePlayNext";
SvgQueuePlayNext.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgQueuePlayNext;