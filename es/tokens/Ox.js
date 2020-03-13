function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgOx = React.forwardRef(function (props, ref) {
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
    d: "M12.643 19.125h-1.287c-.966 0-1.24-.895-1.24-1.58 0-.684.05-.993.05-1.302 0-.488-.247-1.705-.693-2.215-.869-.994-1.417-1.884-1.417-3.176-.755-.39-2.092-.749-2.606-1.334C4.934 8.932 4.5 8.1 4.5 6.91c0-.304.064-.733.194-1.287.296.926.752 1.56 1.367 1.905.901.506 1.917.88 2.784.88h6.31c.867 0 1.882-.375 2.784-.88.614-.345 1.071-.98 1.367-1.905.13.554.194.983.194 1.287 0 1.188-.435 2.02-.95 2.605-.514.586-1.85.945-2.607 1.335 0 1.292-.547 2.182-1.416 3.176-.446.51-.692 1.728-.692 2.215 0 .309.048.619.048 1.303 0 .684-.273 1.58-1.24 1.58z",
    fill: "white"
  }));
});
SvgOx.displayName = "SvgOx";
SvgOx.defaultProps = {
  size: 24,
  color: "#4392CD"
};
export default SvgOx;