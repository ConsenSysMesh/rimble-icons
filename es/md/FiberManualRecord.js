function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgFiberManualRecord = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z"
  }), React.createElement("circle", {
    fill: "#010101",
    cx: 12,
    cy: 12,
    r: 8
  }));
});
SvgFiberManualRecord.displayName = "SvgFiberManualRecord";
SvgFiberManualRecord.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgFiberManualRecord;