function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgEql = React.forwardRef(function (props, ref) {
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
    d: "M7.52 14.535a.28.28 0 01-.25.158H4.215a.276.276 0 01-.236-.137.278.278 0 01-.008-.279l5.553-10.01c.1-.179.387-.179.486 0l4.33 7.784a.296.296 0 01-.008.279.26.26 0 01-.237.136H12.83a.285.285 0 01-.243-.143L9.774 7.208l-3.147 5.816h1.202c.093 0 .186.05.236.129a.284.284 0 01.014.272l-.558 1.108v.002zm12.506-.258a.263.263 0 01-.008.279.259.259 0 01-.235.136h-8.335a.279.279 0 01-.279-.28v-1.107c0-.157.128-.279.279-.279h5.931L14.238 7.23l-.594 1.187c-.1.186-.407.186-.5 0l-.558-1.108a.304.304 0 010-.25l1.387-2.783a.292.292 0 01.243-.151c.093 0 .2.05.25.143l5.56 10.009zm-3.613 1.109l1.38 2.504a.278.278 0 010 .279.26.26 0 01-.235.136H6.44a.286.286 0 01-.244-.143.277.277 0 01.008-.28l2.224-3.613 2.218-3.885a.27.27 0 01.25-.142.262.262 0 01.244.15l.558 1.11a.27.27 0 01-.007.264l-2.819 4.865h6.253l-.58-.966a.262.262 0 01-.007-.28.286.286 0 01.244-.142h1.387c.1 0 .194.057.244.143z",
    fill: "white"
  }));
});
SvgEql.displayName = "SvgEql";
SvgEql.defaultProps = {
  size: 24,
  color: "#C9A35E"
};
export default SvgEql;