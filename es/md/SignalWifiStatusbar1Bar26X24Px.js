function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgSignalWifiStatusbar1Bar26X24Px = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("path", {
    d: "M13 21.99l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95L13 21.99z"
  }), React.createElement("path", {
    fillOpacity: 0.3,
    d: "M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z"
  }), React.createElement("path", {
    d: "M0 0h26v24H0z",
    fill: "none"
  }));
});
SvgSignalWifiStatusbar1Bar26X24Px.displayName = "SvgSignalWifiStatusbar1Bar26X24Px";
SvgSignalWifiStatusbar1Bar26X24Px.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgSignalWifiStatusbar1Bar26X24Px;