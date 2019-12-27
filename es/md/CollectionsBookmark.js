var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgCollectionsBookmark = function SvgCollectionsBookmark(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    React.createElement("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
    React.createElement("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" }),
    React.createElement("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
    React.createElement("path", { d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z" })
  );
};

SvgCollectionsBookmark.displayName = "SvgCollectionsBookmark";
SvgCollectionsBookmark.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgCollectionsBookmark;