function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgDta = React.forwardRef(function (props, ref) {
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
    d: "M18.722 10.884h.015l.013 3.724-8.383 4.892-2.244-1.262v.002l-.014-.009L6 16.879V7.113l2.305-1.36.004.002L10.344 4.5l8.362 4.922.016 1.462zm-2.456 2.334l-1.754-1.004-5.856 3.445 1.72 1.022 5.89-3.463zm-2.15-1.23l-3.611-2.069-.016 4.261 3.627-2.192zm-3.61-2.524l5.806 3.398v-2.029l-5.799-3.386-.007 2.016zm-2.391 8.213l.022-2.034-.013.008V8.472l-1.76-1.05v9.21l1.751 1.045zm.312-2.25l1.759-1.064V7.422l-1.759 1.05v6.955zm2.16 1.523l-.034 2.127 7.826-4.602.023-2.115-7.814 4.59zm5.846-6.438l1.821-1.04-7.841-4.578-1.805 1.044 7.825 4.574z",
    fill: "white"
  }));
});
SvgDta.displayName = "SvgDta";
SvgDta.defaultProps = {
  size: 24,
  color: "#74D269"
};
export default SvgDta;