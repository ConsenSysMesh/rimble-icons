function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgVivo = React.forwardRef(function (props, ref) {
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
    d: "M17.287 7.708a1.18 1.18 0 011.642-.403c.563.353.74 1.103.395 1.678-1.278 2.128-2.72 4.356-3.923 6.057-1.755 2.482-2.135 3.335-3.401 3.335s-1.551-.752-3.356-3.342C7.57 13.496 6.226 11.437 4.69 9.006a1.235 1.235 0 01.356-1.686 1.18 1.18 0 011.652.364c1.517 2.401 4.945 7.407 5.31 7.853.383-.453 4.03-5.75 5.278-7.83z",
    fill: "white"
  }));
});
SvgVivo.displayName = "SvgVivo";
SvgVivo.defaultProps = {
  size: 24,
  color: "#408AF1"
};
export default SvgVivo;