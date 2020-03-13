function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgMzc = React.forwardRef(function (props, ref) {
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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.608 8.675v1.397h1.66l-.75.862h-1.115v1.082h1.16l-.568.86h-.591v2.209l-.955 1.302v-3.51h-1.32l.728-.861h.592v-1.082H9.584l.75-.861h1.115V8.624c-.55-.595-1.308-.893-2.275-.893-1.854 0-3.321 1.977-3.321 3.942 0 1.31.3 2.42.899 3.334L5.716 16.21C4.905 15.008 4.5 13.636 4.5 12.092c0-3.39 2.918-5.343 4.98-5.343 1.264 0 2.231.53 2.903 1.588 1.286-.882 2.6-1.323 3.945-1.323 2.058 0 3.172 2.512 3.172 4.912 0 3.194-2.15 4.427-2.934 4.57a.155.155 0 01-.154-.06.146.146 0 01.039-.208c1.214-.816 1.82-2.066 1.82-3.75 0-3.675-1.887-4.526-3.275-4.526a4.27 4.27 0 00-2.388.722z",
    fill: "white"
  }));
});
SvgMzc.displayName = "SvgMzc";
SvgMzc.defaultProps = {
  size: 24,
  color: "#FFAA05"
};
export default SvgMzc;