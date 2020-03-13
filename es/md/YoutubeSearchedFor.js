function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgYoutubeSearchedFor = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("path", {
    d: "M17.01 14h-.8l-.27-.27a6.451 6.451 0 001.57-4.23c0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51a4.5 4.5 0 019 0 4.507 4.507 0 01-6.32 4.12L7.71 15.1a6.474 6.474 0 007.52-.67l.27.27v.79l5.01 4.99L22 19l-4.99-5z"
  }));
});
SvgYoutubeSearchedFor.displayName = "SvgYoutubeSearchedFor";
SvgYoutubeSearchedFor.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgYoutubeSearchedFor;