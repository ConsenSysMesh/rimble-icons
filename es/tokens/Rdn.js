function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgRdn = React.forwardRef(function (props, ref) {
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
    d: "M7.5 4.504h6.083c.074-.022.111.045.16.083a11.154 11.154 0 011.534 1.792 11.36 11.36 0 011.479 2.96 9.995 9.995 0 01.487 3.46h-3.101a3.75 3.75 0 00.017-.467c-.033-1.104-.373-2.186-.91-3.145-.573-1.026-1.374-1.912-2.285-2.648-.991-.802-2.107-1.435-3.27-1.946-.064-.03-.132-.054-.194-.089zM9.752 10c1.04 1.882 2.079 3.765 3.116 5.65.25.454.502.907.75 1.362-1.291.827-2.578 1.66-3.868 2.488V10h.002z",
    fill: "white"
  }));
});
SvgRdn.displayName = "SvgRdn";
SvgRdn.defaultProps = {
  size: 24,
  color: "#2A2A2A"
};
export default SvgRdn;