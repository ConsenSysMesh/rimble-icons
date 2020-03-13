function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgPlr = React.forwardRef(function (props, ref) {
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
    d: "M6.308 15.677h-.074v3.073H4.5V8.344h1.695v.48h.067c.592-.567 1.345-.583 1.768-.583 1.773 0 2.936 1.69 2.936 3.947v.292c0 2.348-1.346 3.748-2.966 3.748-.758.002-1.32-.171-1.692-.552zm3.047-3.057v-.513c0-1.47-.56-2.453-1.558-2.453-1.079 0-1.657 1.143-1.657 2.453v.51c0 1.249.57 2.205 1.687 2.205.88-.003 1.528-.688 1.528-2.202zm2.45-7.37h1.736v10.932h-1.736V5.25zm6.697 4.807c-.974 0-1.94.772-1.94 1.749v4.383h-1.727V8.417h1.6v.478h.065c.389-.41 1.339-.601 2.12-.59.078 0 .014.002.09.002l.008 1.75h-.216zm-.73 4.264H19.5v1.861h-1.727v-1.86z",
    fill: "white"
  }));
});
SvgPlr.displayName = "SvgPlr";
SvgPlr.defaultProps = {
  size: 24,
  color: "#00BFFF"
};
export default SvgPlr;