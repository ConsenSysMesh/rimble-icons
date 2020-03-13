function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgArdr = React.forwardRef(function (props, ref) {
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
    d: "M11.912 12.893l1.327 1.733-3.864 2.624 2.537-4.357zM12 4.5l2.045 3.356-5.454 9.394H4.5L12 4.5zm0 7.382l2.727-2.014L19.5 17.25h-3.409L12 11.882z",
    fill: "white"
  }));
});
SvgArdr.displayName = "SvgArdr";
SvgArdr.defaultProps = {
  size: 24,
  color: "#3C87C7"
};
export default SvgArdr;