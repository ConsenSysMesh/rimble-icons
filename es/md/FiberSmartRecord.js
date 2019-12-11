var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgFiberSmartRecord = function SvgFiberSmartRecord(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement("path", { fill: "none", d: "M24 24H0V0h24v24z" }),
    React.createElement(
      "g",
      { fill: "#010101" },
      React.createElement("circle", { cx: 9, cy: 12, r: 8 }),
      React.createElement("path", { d: "M17 4.26v2.09a5.99 5.99 0 010 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z" })
    )
  );
};

SvgFiberSmartRecord.displayName = "SvgFiberSmartRecord";
SvgFiberSmartRecord.defaultProps = {
  size: 24
};
export default SvgFiberSmartRecord;