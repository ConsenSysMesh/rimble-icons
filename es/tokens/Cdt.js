function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgCdt = React.forwardRef(function (props, ref) {
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
    d: "M20.25 12.023a8.262 8.262 0 01-2.39 5.818 8.122 8.122 0 01-5.77 2.409v-2.102c2.961.01 5.494-2.142 5.988-5.086h-2.917c.115-.342.174-.7.175-1.062a3.585 3.585 0 00-.175-1.062h2.917c-.501-2.94-3.03-5.088-5.988-5.087V3.75c4.506.043 8.141 3.729 8.16 8.273zm-5.44 1.769h2.303c-.851 2.478-3.354 3.975-5.92 3.54-2.564-.437-4.443-2.676-4.443-5.3 0-2.623 1.879-4.862 4.444-5.298 2.565-.435 5.068 1.061 5.92 3.54h-2.305a3.54 3.54 0 00-.986-.995 3.224 3.224 0 00-4.474.995 3.283 3.283 0 00.987 4.512 3.223 3.223 0 004.473-.995z",
    fill: "white"
  }));
});
SvgCdt.displayName = "SvgCdt";
SvgCdt.defaultProps = {
  size: 24,
  color: "#272731"
};
export default SvgCdt;