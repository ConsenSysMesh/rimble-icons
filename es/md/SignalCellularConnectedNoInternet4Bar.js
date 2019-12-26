var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSignalCellularConnectedNoInternet4Bar = function SvgSignalCellularConnectedNoInternet4Bar(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement("path", { d: "M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z" })
  );
};

SvgSignalCellularConnectedNoInternet4Bar.displayName = "SvgSignalCellularConnectedNoInternet4Bar";
SvgSignalCellularConnectedNoInternet4Bar.defaultProps = {
  size: 24
};
export default SvgSignalCellularConnectedNoInternet4Bar;