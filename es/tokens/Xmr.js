function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgXmr = React.forwardRef(function (props, ref) {
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
    d: "M11.977 3.926a8.112 8.112 0 017.7 10.692h-2.419v-6.82l-5.28 5.28-5.28-5.28v6.82h-2.42a8.303 8.303 0 01-.418-2.574 8.112 8.112 0 018.118-8.118zm-1.209 10.339L12 15.476l1.21-1.21 2.288-2.31v4.29h3.41a8.106 8.106 0 01-6.93 3.894 8.13 8.13 0 01-6.93-3.894h3.41v-4.29l2.31 2.31v-.001z",
    fill: "white"
  }));
});
SvgXmr.displayName = "SvgXmr";
SvgXmr.defaultProps = {
  size: 24,
  color: "#FF6600"
};
export default SvgXmr;