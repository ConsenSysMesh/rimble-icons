function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgAirplay = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("defs", null, React.createElement("path", {
    id: "airplay_svg__a",
    d: "M0 0h24v24H0V0z"
  })), React.createElement("defs", null, React.createElement("path", {
    id: "airplay_svg__c",
    d: "M0 0h24v24H0V0z"
  })), React.createElement("clipPath", {
    id: "airplay_svg__b"
  }, React.createElement("use", {
    xlinkHref: "#airplay_svg__a",
    overflow: "visible"
  })), React.createElement("clipPath", {
    id: "airplay_svg__d",
    clipPath: "url(#airplay_svg__b)"
  }, React.createElement("use", {
    xlinkHref: "#airplay_svg__c",
    overflow: "visible"
  })), React.createElement("path", {
    d: "M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    clipPath: "url(#airplay_svg__d)"
  }));
});
SvgAirplay.displayName = "SvgAirplay";
SvgAirplay.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgAirplay;