function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgRemoveFromQueue = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("defs", null, React.createElement("path", {
    id: "removeFromQueue_svg__a",
    d: "M0 0h24v24H0V0z"
  })), React.createElement("clipPath", {
    id: "removeFromQueue_svg__b"
  }, React.createElement("use", {
    xlinkHref: "#removeFromQueue_svg__a",
    overflow: "visible"
  })), React.createElement("path", {
    clipPath: "url(#removeFromQueue_svg__b)",
    d: "M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"
  }));
});
SvgRemoveFromQueue.displayName = "SvgRemoveFromQueue";
SvgRemoveFromQueue.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgRemoveFromQueue;