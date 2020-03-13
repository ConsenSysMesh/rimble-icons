function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgBts = React.forwardRef(function (props, ref) {
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
    d: "M8.25 9.902l3.158 3.258c-.13.194-.217.413-.258.642h-2.9v-3.9zm0-.877V3.75l4.204 3.854v4.851a1.597 1.597 0 00-.622.267L8.25 9.024zm7.896 8.147l-2.044-2.107c.13-.195.217-.414.258-.643h2.89a4.707 4.707 0 01-1.104 2.75zm-.425.439a4.416 4.416 0 01-2.666 1.139v-2.981c.224-.043.437-.134.623-.267l2.043 2.108zM8.26 14.42h2.89c.041.236.131.453.258.643l-2.043 2.108a4.707 4.707 0 01-1.105-2.75zm8.99-.619h-2.89a1.704 1.704 0 00-.258-.643l2.044-2.107a4.707 4.707 0 011.104 2.75zm-7.461 3.809l2.043-2.109c.184.13.395.223.622.267v2.981a4.415 4.415 0 01-2.665-1.14zm5.933-6.998l-2.044 2.108a1.596 1.596 0 00-.623-.266V9.474c.992.069 1.93.47 2.666 1.14z",
    fill: "white"
  }));
});
SvgBts.displayName = "SvgBts";
SvgBts.defaultProps = {
  size: 24,
  color: "#35BAEB"
};
export default SvgBts;