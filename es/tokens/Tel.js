function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgTel = React.forwardRef(function (props, ref) {
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
    d: "M18.81 8.608c.475.385.774 1.181.669 1.765l-1.02 5.643c-.107.588-.669 1.236-1.248 1.439l-5.564 1.954c-.58.203-1.44.056-1.914-.329l-4.544-3.688c-.474-.384-.774-1.176-.667-1.764l1.02-5.644c.106-.588.668-1.234 1.248-1.438l5.565-1.955c.58-.204 1.44-.055 1.915.329l4.54 3.688zm-4.733 2.534l.226-1.148-2.124.004.3-1.512h-.686a4.32 4.32 0 01-2.061 1.669l-.193.99h.929s-.315 1.42-.42 1.944c-.263 1.335.397 2.281 1.411 2.281h1.716l.3-1.267H12.04c-.638 0-.604-.349-.48-.967l.395-1.997 2.122.003z",
    fill: "white"
  }));
});
SvgTel.displayName = "SvgTel";
SvgTel.defaultProps = {
  size: 24,
  color: "#14C8FF"
};
export default SvgTel;