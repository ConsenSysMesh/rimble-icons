function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgNebl = React.forwardRef(function (props, ref) {
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
    d: "M15.27 10.245v3.588l-3.23 1.775v-3.586l3.23-1.776v-.001zm3.855-.92v5.349c0 .38-.105.752-.302 1.075a2.207 2.207 0 01-.828.79l-2.41 1.323v-3.53l.305-.167V9.906l2.95-1.622c.184.315.285.671.285 1.042zm-13.12 7.213a2.208 2.208 0 01-.806-.755 2.072 2.072 0 01-.324-1.108V11.25l3.318 2.591v.144l.005.149.258.152 3.312 1.821.273.15V19.5a2.347 2.347 0 01-1.171-.287l-4.865-2.675zm-.138-8.993l3.508-1.92 2.385 2.31-3.567 1.967v.3l-3.31 1.818-.008-2.695c0-.38.105-.754.304-1.077.174-.285.41-.525.688-.704v.001zm12.128-.083c.351.192.643.476.846.821l-2.95 1.622v-.027l-.305-.167-3.25-1.786 3.25-1.788 2.409 1.325zm-13.113 4.56l3.311-1.82v3.64l-3.31-1.821zm7.16-4.237V4.5c.38.006.754.104 1.088.287l2.456 1.35-3.25 1.787-.295-.139zm-.274.15L8.462 6.119l2.552-1.404A2.355 2.355 0 0112.04 4.5v3.285l-.273.15zm.294 8.333l.273-.15 3.212 1.766-2.417 1.329c-.334.182-.708.28-1.089.286v-3.242l.021.011zm3.524-1.936v3.53l-.04.022-3.21-1.766 3.25-1.786z",
    fill: "white"
  }));
});
SvgNebl.displayName = "SvgNebl";
SvgNebl.defaultProps = {
  size: 24,
  color: "#50479E"
};
export default SvgNebl;