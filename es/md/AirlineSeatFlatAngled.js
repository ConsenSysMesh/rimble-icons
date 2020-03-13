function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgAirlineSeatFlatAngled = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("path", {
    d: "M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09a4 4 0 012.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94a3.01 3.01 0 001.41-4A3.005 3.005 0 004.7 4.8a2.99 2.99 0 00-1.4 4 2.99 2.99 0 004 1.4z"
  }), React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
});
SvgAirlineSeatFlatAngled.displayName = "SvgAirlineSeatFlatAngled";
SvgAirlineSeatFlatAngled.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgAirlineSeatFlatAngled;