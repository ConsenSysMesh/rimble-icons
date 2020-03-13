function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgDlt = React.forwardRef(function (props, ref) {
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
    d: "M11.855 6.718l-4.57 9.756h7.588a.55.55 0 01.504.341l.008.019a.48.48 0 01-.023.42.72.72 0 01-.626.371H6.672a.619.619 0 01-.35-.109l-.042-.028a.655.655 0 01-.217-.818l5.393-11.362a.928.928 0 01.234-.307.52.52 0 01.67-.008.373.373 0 01.1.13l5.47 11.438a.71.71 0 01.044.5.428.428 0 01-.411.317H17.5a.657.657 0 01-.596-.387L12.187 6.72a.183.183 0 00-.165-.109.183.183 0 00-.167.107z",
    fill: "white"
  }));
});
SvgDlt.displayName = "SvgDlt";
SvgDlt.defaultProps = {
  size: 24,
  color: "#F4AE95"
};
export default SvgDlt;