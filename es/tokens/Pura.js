function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgPura = React.forwardRef(function (props, ref) {
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
    d: "M8.394 6h5.823c1.611.095 3.383.758 4.095 2.295.89 1.958.448 4.712-1.558 5.83-1.85 1.057-4.062.64-6.093.727-.054 1 .225 2.165-.472 3.01-.28.406-1.567.888-1.567.888s-.118-1.087-.162-3.533c-.028-.675.082-1.432.662-1.87.679-.584 1.641-.402 2.466-.432 1.245-.033 2.553.158 3.735-.322 1.733-.71 1.796-3.604.049-4.333-1.784-.692-3.755-.063-5.588-.445C8.952 7.582 8.579 6.762 8.394 6zM5.25 9.322c1.522.028 3.048-.053 4.568.039 1.104.084 1.83 1.085 1.945 2.108-1.533-.008-3.07.049-4.603-.019-.942-.054-1.638-.82-1.91-1.663v-.464z",
    fill: "white"
  }));
});
SvgPura.displayName = "SvgPura";
SvgPura.defaultProps = {
  size: 24,
  color: "#333333"
};
export default SvgPura;