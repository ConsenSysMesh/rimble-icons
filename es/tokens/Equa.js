function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgEqua = React.forwardRef(function (props, ref) {
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
    d: "M12.54 7.559s-3.095.454-3.546 3.894c0 0-.479 3.85 3.456 4.89.273.072.553.108.835.108h.193c.4 0 .785.16 1.068.445.284.285.443.672.443 1.075a1.511 1.511 0 01-1.392 1.517c-1.934.13-4.53-.819-6.215-3.102 0 0-3.299-4.744.296-9.103a7.629 7.629 0 013.208-2.304c1.478-.553 3.642-.908 5.521.567 0 0 2.515 1.948 1.226 5.128 0 0-.903 2.531-3.998 2.726l-.43-.024a1.42 1.42 0 01-1.06-.518 1.442 1.442 0 01.155-1.992c.25-.22.567-.346.898-.357l.437-.03s1.483-.064 1.354-1.817c0 0-.13-1.558-2.45-1.103",
    fill: "white"
  }));
});
SvgEqua.displayName = "SvgEqua";
SvgEqua.defaultProps = {
  size: 24,
  color: "#F68922"
};
export default SvgEqua;