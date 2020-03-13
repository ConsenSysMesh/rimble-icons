function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgCallMissedOutgoing = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("defs", null, React.createElement("path", {
    id: "callMissedOutgoing_svg__a",
    d: "M24 24H0V0h24v24z"
  })), React.createElement("clipPath", {
    id: "callMissedOutgoing_svg__b"
  }, React.createElement("use", {
    xlinkHref: "#callMissedOutgoing_svg__a",
    overflow: "visible"
  })), React.createElement("path", {
    clipPath: "url(#callMissedOutgoing_svg__b)",
    d: "M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"
  }));
});
SvgCallMissedOutgoing.displayName = "SvgCallMissedOutgoing";
SvgCallMissedOutgoing.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgCallMissedOutgoing;