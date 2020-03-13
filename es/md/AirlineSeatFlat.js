function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgAirlineSeatFlat = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("path", {
    d: "M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9a3 3 0 00-.04-4.24 3 3 0 00-4.24.04 3 3 0 00.04 4.24 3 3 0 004.24-.04z"
  }), React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
});
SvgAirlineSeatFlat.displayName = "SvgAirlineSeatFlat";
SvgAirlineSeatFlat.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgAirlineSeatFlat;