function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgYoyow = React.forwardRef(function (props, ref) {
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
    d: "M16.117 12.431c.255.273.41.637.41 1.036 0 .847-.696 1.533-1.554 1.533a1.543 1.543 0 01-1.553-1.533c0-.399.155-.763.409-1.036a.558.558 0 01-.897-.431.54.54 0 01.118-.338 1.56 1.56 0 01-1.05.404 1.56 1.56 0 01-1.05-.404.54.54 0 01.118.338.55.55 0 01-.555.547.558.558 0 01-.341-.116c.253.273.408.637.408 1.036 0 .847-.696 1.533-1.553 1.533a1.544 1.544 0 01-1.554-1.533c0-.399.155-.763.409-1.036A.558.558 0 016.986 12a.54.54 0 01.117-.338 1.56 1.56 0 01-1.05.404A1.543 1.543 0 014.5 10.533C4.5 9.686 5.195 9 6.053 9s1.553.686 1.553 1.533c0 .399-.154.763-.408 1.036a.557.557 0 01.897.431.54.54 0 01-.118.338c.276-.251.645-.404 1.05-.404s.773.153 1.05.404A.54.54 0 019.959 12a.557.557 0 01.896-.431 1.517 1.517 0 01-.408-1.036C10.447 9.686 11.142 9 12 9s1.553.686 1.553 1.533c0 .399-.154.763-.409 1.036a.557.557 0 01.897.431.54.54 0 01-.117.338c.276-.251.645-.404 1.05-.404s.772.153 1.05.404a.54.54 0 01-.119-.338.557.557 0 01.897-.431 1.517 1.517 0 01-.409-1.036c0-.847.696-1.533 1.554-1.533.858 0 1.553.686 1.553 1.533 0 .847-.695 1.533-1.553 1.533a1.56 1.56 0 01-1.05-.404.54.54 0 01.118.338.55.55 0 01-.556.547.558.558 0 01-.34-.116h-.002z",
    fill: "white"
  }));
});
SvgYoyow.displayName = "SvgYoyow";
SvgYoyow.defaultProps = {
  size: 24,
  color: "#21A5DE"
};
export default SvgYoyow;