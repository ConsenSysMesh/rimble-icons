function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgBnty = React.forwardRef(function (props, ref) {
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
    d: "M18.896 14.55a1.1 1.1 0 01.385 1.607c-.32.567-1.057.756-1.635.44a1.224 1.224 0 01-.61-.976h-2.951l-1.412 2.393c0 .032-.032.063-.063.095.32.189.545.567.545.976 0 .63-.545 1.165-1.187 1.165a1.173 1.173 0 01-1.187-1.165c0-.41.225-.756.545-.976 0-.032-.032-.063-.064-.095l-1.41-2.392H6.9a1.253 1.253 0 01-.61.975c-.577.315-1.314.127-1.636-.44a1.168 1.168 0 01.45-1.606c.385-.22.801-.22 1.155-.032.031-.031.031-.094.063-.126L7.766 12 6.355 9.607a.237.237 0 01-.065-.126c-.352.157-.801.189-1.155-.032a1.169 1.169 0 01-.448-1.606c.32-.566 1.058-.755 1.635-.44.385.22.578.598.61.976h2.983l1.412-2.393c0-.032.032-.063.063-.095a1.147 1.147 0 01-.545-.976c0-.63.545-1.165 1.187-1.165s1.187.504 1.187 1.165c0 .41-.225.756-.545.976 0 .032.032.063.064.095l1.41 2.392H17.1c.032-.409.256-.755.61-.975.577-.315 1.314-.126 1.636.44a1.168 1.168 0 01-.45 1.606c-.384.22-.802.22-1.155.032-.031.031-.031.094-.064.126L16.266 12l1.412 2.393a.237.237 0 01.064.126c.352-.157.802-.189 1.155.032v-.001zm-5.356-3.338c0-.66-.545-1.196-1.219-1.196h-1.54a.287.287 0 00-.289.284v3.4c0 .158.129.284.29.284h1.539c.674 0 1.219-.536 1.219-1.197 0-.283-.096-.567-.289-.756.16-.252.289-.504.289-.819z",
    fill: "white"
  }));
});
SvgBnty.displayName = "SvgBnty";
SvgBnty.defaultProps = {
  size: 24,
  color: "#FD7A3D"
};
export default SvgBnty;