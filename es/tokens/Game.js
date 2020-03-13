function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgGame = React.forwardRef(function (props, ref) {
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
    d: "M9.652 9.514h8.313v1.866H9.652V9.514zm8.313 3.108H18v4.907s-6.485 4.699-11.522-.414c0 0-2.76-2.799-1.76-6.876 0 0 .794-5.078 6.831-5.7 0 0 3.726-.519 6.14 2.245L16.241 8.2s-3.071-3.178-7.176-.69c0 0-3.346 1.866-1.966 6.565 0 0 1.518 4.076 6.278 3.247 0 0 1.621-.369 2.45-1.083v-1.751H9.651v-1.866h8.313z",
    fill: "white"
  }));
});
SvgGame.displayName = "SvgGame";
SvgGame.defaultProps = {
  size: 24,
  color: "#2D475B"
};
export default SvgGame;