function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgPpt = React.forwardRef(function (props, ref) {
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
    d: "M12.037 6.237c-.987 0-1.788-.55-1.788-1.228 0-.68.8-1.229 1.788-1.229.987 0 1.786.55 1.786 1.229 0 .678-.8 1.228-1.786 1.228zm-.925 13.713V6.828h3.984c.148 0 .252.11.252.258v7.281c0 .147-.105.273-.252.273H12.9v5.31c0 .148-.113.282-.26.282h-1.251a.287.287 0 01-.277-.281v-.001zm-.672-5.31H8.933a.284.284 0 01-.281-.274v-7.28c0-.148.133-.258.28-.258h1.508v7.812z",
    fill: "white"
  }));
});
SvgPpt.displayName = "SvgPpt";
SvgPpt.defaultProps = {
  size: 24,
  color: "#152743"
};
export default SvgPpt;