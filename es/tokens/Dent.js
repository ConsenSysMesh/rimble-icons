function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgDent = React.forwardRef(function (props, ref) {
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
    d: "M18.811 15.863a1.15 1.15 0 01-1.553.408l-3.585-2.032v-1.29l1.139-.645 3.583 2.031c.545.309.73.993.416 1.527zm-5.673 2.744c0 .617-.51 1.117-1.138 1.117-.629 0-1.138-.5-1.138-1.117v-4.064L12 13.898l1.138.645v4.064zM6.742 16.27a1.15 1.15 0 01-1.553-.41 1.107 1.107 0 01.416-1.526l3.583-2.032 1.139.646v1.29L6.742 16.27zM5.605 9.664a1.107 1.107 0 01-.417-1.526 1.15 1.15 0 011.554-.41l3.585 2.033v1.29l-1.139.645-3.583-2.031zm5.257-4.27c0-.618.51-1.118 1.138-1.118.629 0 1.138.5 1.138 1.117v4.064L12 10.102l-1.138-.645V5.393zm2.811 6.265l.603.341-.603.341v-.682zm-1.137-1.253l.602-.342v.684l-.602-.342zm-1.674.341v-.682l.602.341-.602.341zm-.535 1.594L9.724 12l.603-.341v.682zm1.137 1.253l-.602.342v-.684l.602.342zm1.674-.341v.682l-.602-.341.602-.341zM12 13.29l-1.138-.645v-1.29L12 10.71l1.138.645v1.29L12 13.29zm5.258-5.561a1.15 1.15 0 011.553.41 1.106 1.106 0 01-.416 1.526l-3.583 2.032-1.139-.646v-1.29l3.585-2.032zm1.405 6.151L15.347 12l3.316-1.88a1.629 1.629 0 00.613-2.245 1.69 1.69 0 00-2.286-.601l-3.317 1.88V5.393c0-.907-.749-1.643-1.673-1.643s-1.673.736-1.673 1.643v3.76L7.01 7.274a1.69 1.69 0 00-2.285.602 1.627 1.627 0 00.613 2.245L8.653 12l-3.315 1.88a1.628 1.628 0 00-.614 2.245 1.69 1.69 0 002.286.602l3.317-1.88v3.76c0 .907.749 1.643 1.673 1.643s1.673-.736 1.673-1.643v-3.76l3.317 1.88a1.69 1.69 0 002.286-.602 1.627 1.627 0 00-.613-2.245z",
    fill: "white"
  }));
});
SvgDent.displayName = "SvgDent";
SvgDent.defaultProps = {
  size: 24,
  color: "#666666"
};
export default SvgDent;