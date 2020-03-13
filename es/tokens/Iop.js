function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgIop = React.forwardRef(function (props, ref) {
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
    d: "M7.592 6.212l.299-.537a.817.817 0 01.714-.425h6.716c.278 0 .537.144.688.381h3.043v5.355l.337.592a.855.855 0 010 .844l-.337.592v2.304l-2.578 2.234-.444.78a.818.818 0 01-.709.418H8.605a.818.818 0 01-.714-.424l-.019-.034H4.874v-5.4l-.267-.479a.855.855 0 010-.828l.266-.479V8.681l2.72-2.469zm1.013-.123L5.32 12l3.284 5.91h6.716L18.679 12 15.32 6.09H8.605zm.303.534h6.112L18.075 12l-3.055 5.378H8.91L5.92 12l2.987-5.377zm1.413 2.288l-1.642 3.05 1.643 3.052h3.507l1.641-3.051-1.642-3.051H10.32z",
    fill: "white"
  }));
});
SvgIop.displayName = "SvgIop";
SvgIop.defaultProps = {
  size: 24,
  color: "#4CB8D1"
};
export default SvgIop;