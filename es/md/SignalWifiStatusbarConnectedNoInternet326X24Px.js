var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSignalWifiStatusbarConnectedNoInternet326X24Px = function SvgSignalWifiStatusbarConnectedNoInternet326X24Px(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement("path", {
      fillOpacity: 0.3,
      d: "M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"
    }),
    React.createElement("path", { d: "M20 13.28V8.71C18.35 7.87 15.94 7 13 7c-5.44 0-9.07 2.97-9.44 3.24l9.43 11.75.01.01.01-.01L20 13.28zM22 20h2v2h-2zm0-10h2v8h-2z" })
  );
};

SvgSignalWifiStatusbarConnectedNoInternet326X24Px.displayName = "SvgSignalWifiStatusbarConnectedNoInternet326X24Px";
SvgSignalWifiStatusbarConnectedNoInternet326X24Px.defaultProps = {
  size: 24
};
export default SvgSignalWifiStatusbarConnectedNoInternet326X24Px;