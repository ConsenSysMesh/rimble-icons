function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgPlaylistAddCheck = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("defs", null, React.createElement("path", {
    id: "playlistAddCheck_svg__a",
    d: "M0 0h24v24H0V0z"
  })), React.createElement("clipPath", {
    id: "playlistAddCheck_svg__b"
  }, React.createElement("use", {
    xlinkHref: "#playlistAddCheck_svg__a",
    overflow: "visible"
  })), React.createElement("path", {
    clipPath: "url(#playlistAddCheck_svg__b)",
    d: "M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"
  }));
});
SvgPlaylistAddCheck.displayName = "SvgPlaylistAddCheck";
SvgPlaylistAddCheck.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgPlaylistAddCheck;