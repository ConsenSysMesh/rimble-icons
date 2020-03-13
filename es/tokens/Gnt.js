function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgGnt = React.forwardRef(function (props, ref) {
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
    d: "M15.6 3.43l.961.964-1.821 1.872c.386.589.592 1.278.59 1.982a3.56 3.56 0 01-1.006 2.506 3.347 3.347 0 01-1.774.98v1.632c.675.139 1.292.48 1.77.976a3.561 3.561 0 011.01 2.508 3.561 3.561 0 01-1.01 2.508 3.41 3.41 0 01-2.455 1.042 3.39 3.39 0 01-2.456-1.042A3.579 3.579 0 018.4 16.85a3.58 3.58 0 011.007-2.505 3.347 3.347 0 011.773-.98v-1.632a3.419 3.419 0 01-1.77-.976 3.579 3.579 0 01-1.01-2.51c0-.943.359-1.838 1.01-2.507a3.41 3.41 0 012.456-1.043c.688 0 1.35.21 1.915.6L15.6 3.43zm-3.735 11.246a2.023 2.023 0 00-1.486.632 2.2 2.2 0 00-.62 1.542c0 .58.22 1.122.62 1.542a2.062 2.062 0 001.485.632 2.025 2.025 0 001.485-.632c.4-.413.623-.966.62-1.542 0-.58-.22-1.121-.622-1.545a2.02 2.02 0 00-1.482-.629zm1.482-4.872c.402-.414.625-.968.623-1.545a2.16 2.16 0 00-.62-1.542 2.062 2.062 0 00-1.485-.632 2.024 2.024 0 00-1.486.632 2.2 2.2 0 00-.62 1.542c0 .58.22 1.122.62 1.542a2.063 2.063 0 001.485.631c.57 0 1.095-.22 1.483-.628z",
    fill: "white"
  }));
});
SvgGnt.displayName = "SvgGnt";
SvgGnt.defaultProps = {
  size: 24,
  color: "#002D64"
};
export default SvgGnt;