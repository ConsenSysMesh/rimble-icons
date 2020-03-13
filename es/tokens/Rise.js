function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgRise = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size,
    ref: ref
  }), React.createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.454 6.866c-.643 0-1.164-.53-1.164-1.182 0-.654.521-1.184 1.164-1.184.643 0 1.164.53 1.164 1.184 0 .654-.52 1.182-1.164 1.182zM14.585 19.5a1.174 1.174 0 01-1.164-1.183c0-.653.522-1.183 1.164-1.183.644 0 1.165.53 1.165 1.183 0 .654-.521 1.183-1.165 1.183zm-4.654-8.842a1.035 1.035 0 01-1.466-.2A1.074 1.074 0 018.66 8.97l5.369-4.171a1.035 1.035 0 011.466.199 1.074 1.074 0 01-.195 1.49l-5.369 4.17zm.04 4.251a1.035 1.035 0 01-1.466-.199 1.074 1.074 0 01.195-1.49l5.369-4.17a1.034 1.034 0 011.466.198 1.074 1.074 0 01-.195 1.49L9.97 14.909zm0 4.372a1.035 1.035 0 01-1.466-.199 1.074 1.074 0 01.195-1.49l5.369-4.17a1.034 1.034 0 011.466.198 1.074 1.074 0 01-.195 1.49L9.97 19.28z",
    fill: "white"
  }));
});
SvgRise.displayName = "SvgRise";
SvgRise.defaultProps = {
  size: 24,
  color: "#F49352"
};
export default SvgRise;