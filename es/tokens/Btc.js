function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgBtc = React.forwardRef(function (props, ref) {
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
    d: "M17.058 10.387c.227-1.587-.928-2.439-2.507-3.008l.512-2.147-1.251-.326-.499 2.091a50.28 50.28 0 00-1.002-.247l.503-2.105-1.25-.326-.514 2.147c-.272-.065-.539-.129-.798-.196l.001-.007-1.725-.45-.332 1.397s.928.222.907.236c.507.132.599.482.584.76L8.283 14.09c-.062.16-.219.402-.573.31.013.02-.909-.236-.909-.236L6.18 15.66l1.627.424c.303.08.6.163.893.24l-.518 2.173 1.25.326.511-2.149c.342.097.673.186.998.27l-.511 2.139 1.25.326.518-2.168c2.133.422 3.736.251 4.412-1.765.544-1.624-.027-2.56-1.15-3.17.818-.198 1.433-.76 1.598-1.92zm-2.857 4.188c-.388 1.624-3.003.746-3.851.526l.687-2.878c.847.221 3.567.66 3.163 2.352zm.386-4.212c-.353 1.477-2.53.726-3.236.543l.623-2.61c.706.183 2.98.526 2.613 2.067z",
    fill: "white"
  }));
});
SvgBtc.displayName = "SvgBtc";
SvgBtc.defaultProps = {
  size: 24,
  color: "#FF9900"
};
export default SvgBtc;