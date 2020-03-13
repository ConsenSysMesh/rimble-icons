function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgEla = React.forwardRef(function (props, ref) {
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
    d: "M8.25 16.59L12 14.473v4.227l-3.75-2.112zm0-6.75L12 7.723v4.226L8.25 9.84z",
    fill: "white",
    fillOpacity: 0.4
  }), React.createElement("path", {
    d: "M19.5 14.422l-3.75 2.165v-4.264l3.75 2.1zm0-6.75l-3.75 2.165V5.573l3.75 2.1z",
    fill: "white",
    fillOpacity: 0.7
  }), React.createElement("path", {
    d: "M8.25 16.588v-4.263L12 14.479l-3.75 2.11zm0-6.75V5.576L12 7.728l-3.75 2.11z",
    fill: "white",
    fillOpacity: 0.8
  }), React.createElement("path", {
    d: "M15.75 16.587L12 14.478l3.75-2.155v4.264zm0-6.75L12 7.728l3.75-2.155v4.264z",
    fill: "white"
  }), React.createElement("path", {
    d: "M15.75 16.587L12 18.701v-4.223l3.75 2.109zm0-6.75L12 11.951V7.728l3.75 2.109z",
    fill: "white",
    fillOpacity: 0.6
  }), React.createElement("path", {
    d: "M8.25 12.325v4.263L4.5 14.424l3.75-2.098zm0-6.75v4.263L4.5 7.674l3.75-2.099z",
    fill: "white",
    fillOpacity: 0.5
  }));
});
SvgEla.displayName = "SvgEla";
SvgEla.defaultProps = {
  size: 24,
  color: "#3FBADF"
};
export default SvgEla;