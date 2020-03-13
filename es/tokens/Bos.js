function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgBos = React.forwardRef(function (props, ref) {
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
    d: "M10.824 14.213v-1.438h2.216c1.477 0 2.216-.37 2.216-1.107V7.795c0-.737-.739-1.106-2.216-1.106H9.495v2.323H7.5V5.25h5.318c2.955 0 4.432.811 4.432 2.434v4.095c0 1.623-1.477 2.434-4.432 2.434h-1.994zm4.432.885h1.994v1.217c0 1.623-1.477 2.435-4.432 2.435H7.5v-8.631h5.318c.312 0 .607.009.887.027v1.44a6.843 6.843 0 00-.665-.03H9.495v5.755h3.545c1.478 0 2.217-.369 2.217-1.106v-1.107h-.001z",
    fill: "white"
  }));
});
SvgBos.displayName = "SvgBos";
SvgBos.defaultProps = {
  size: 24,
  color: "#00A8D6"
};
export default SvgBos;