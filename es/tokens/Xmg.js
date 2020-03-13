function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgXmg = React.forwardRef(function (props, ref) {
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
    d: "M17.25 14.655l-1.112 4.095H6.75v-.685l5.092-5.789-4.99-6.282V5.25h9.249l.323 3.189h-.593c-.39-.727-.722-1.27-.996-1.631-.273-.361-.517-.585-.731-.675a2.008 2.008 0 00-.626-.157 8.164 8.164 0 00-.954-.049H9.896l3.937 4.905v.236l-4.866 5.524h5.554c.273 0 .523-.065.75-.195.226-.13.423-.294.588-.49.175-.203.33-.423.462-.655.142-.247.267-.503.373-.767l.556.17z",
    fill: "white"
  }));
});
SvgXmg.displayName = "SvgXmg";
SvgXmg.defaultProps = {
  size: 24,
  color: "#004A80"
};
export default SvgXmg;