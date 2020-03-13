function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgNextWeek = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("defs", null, React.createElement("path", {
    id: "nextWeek_svg__a",
    d: "M0 0h24v24H0z"
  })), React.createElement("clipPath", {
    id: "nextWeek_svg__b"
  }, React.createElement("use", {
    xlinkHref: "#nextWeek_svg__a",
    overflow: "visible"
  })), React.createElement("path", {
    clipPath: "url(#nextWeek_svg__b)",
    fill: "#010101",
    d: "M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"
  }));
});
SvgNextWeek.displayName = "SvgNextWeek";
SvgNextWeek.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgNextWeek;