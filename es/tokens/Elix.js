function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgElix = React.forwardRef(function (props, ref) {
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
    d: "M7.573 17.702l.002-.003 2.39-5.712-2.392-5.711 4.414 5.711-4.41 5.711-.004.004zm8.832 0l-.003-.004-4.41-5.71 4.413-5.712-2.392 5.711 2.39 5.712.002.003z",
    fill: "white"
  }), React.createElement("path", {
    d: "M11.989 11.988v3.98L7.57 17.7l4.418-5.715v-3.98l4.417-1.732-4.417 5.715z",
    fill: "white",
    fillOpacity: 0.8
  }), React.createElement("path", {
    d: "M11.989 15.967v3.489L7.57 17.698l4.418-1.737v-3.973L7.57 6.273l4.418 1.732V4.517l4.417 1.757-4.417 1.737v3.974l4.417 5.715-4.417-1.732z",
    fill: "white",
    fillOpacity: 0.5
  }), React.createElement("path", {
    d: "M7.571 6.274l4.418-1.757v3.494L7.57 6.274zm8.835 11.424l-4.417 1.758V15.96l4.417 1.737z",
    fill: "white",
    fillOpacity: 0.145
  }));
});
SvgElix.displayName = "SvgElix";
SvgElix.defaultProps = {
  size: 24,
  color: "#00ADED"
};
export default SvgElix;