var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSignalWifiStatusbarConnectedNoInternet426X24Px = function SvgSignalWifiStatusbarConnectedNoInternet426X24Px(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    React.createElement("path", { d: "M22 22h2v-2h-2v2zM13 2C5.74 2 .9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24l1.35-1.68C25.1 5.96 20.26 2 13 2zm9 16h2v-8h-2v8z" })
  );
};

SvgSignalWifiStatusbarConnectedNoInternet426X24Px.displayName = "SvgSignalWifiStatusbarConnectedNoInternet426X24Px";
SvgSignalWifiStatusbarConnectedNoInternet426X24Px.defaultProps = {
  size: 24
};
export default SvgSignalWifiStatusbarConnectedNoInternet426X24Px;