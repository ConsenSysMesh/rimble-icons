function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgR = React.forwardRef(function (props, ref) {
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
    d: "M7.875 18.479l2.6-1.36V8.06l3.714 2.083-2.785 1.45v2.99l6.221 4.168v-2.809l-3.807-2.627 3.157-1.631v-2.9l-6.5-3.533-2.6 1.359v11.87z",
    fill: "white"
  }));
});
SvgR.displayName = "SvgR";
SvgR.defaultProps = {
  size: 24,
  color: "#771A4E"
};
export default SvgR;