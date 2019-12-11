var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSubway = function SvgSubway(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement("path", {
      fill: "none",
      d: "M0 0v24h24V0H0zm22 22H2V8.86C2 6.05 3.53 3.84 6.2 2.8 8 2.09 10.14 2 12 2c1.86 0 4 .09 5.8.8C20.47 3.84 22 6.05 22 8.86V22z"
    }),
    React.createElement("circle", { cx: 15.5, cy: 16, r: 1 }),
    React.createElement("circle", { cx: 8.5, cy: 16, r: 1 }),
    React.createElement("path", { d: "M7.01 9h10v5h-10z" }),
    React.createElement("path", { d: "M17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z" })
  );
};

SvgSubway.displayName = "SvgSubway";
SvgSubway.defaultProps = {
  size: 24
};
export default SvgSubway;