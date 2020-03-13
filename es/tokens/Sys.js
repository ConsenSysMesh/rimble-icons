function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgSys = React.forwardRef(function (props, ref) {
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
    d: "M13.534 11.327a.088.088 0 00-.085.031.082.082 0 00.017.117c3.284 2.383-1.39 7.84-10.466 2.033 7.695 7.242 18.41-.757 10.534-2.18zM9.151 8.141c-6.814 2.18.993 7.322 1.67 4.725a.081.081 0 00-.009-.065.085.085 0 00-.053-.037.09.09 0 00-.048 0c-1.003.327-6.526-1.218-1.56-4.623zM21 9.451c-5.9-4.207-16.971-.738-11.26 2.233a.089.089 0 00.118-.035.083.083 0 00.002-.073C7.538 6.667 19.336 8.16 21 9.45zm-4.896 6.114c3.12-1.418.583-6.271-3.543-5.334a.086.086 0 01-.104-.064.08.08 0 01.03-.082c3.21-2.413 9.236 3.218 3.617 5.48z",
    fill: "white"
  }));
});
SvgSys.displayName = "SvgSys";
SvgSys.defaultProps = {
  size: 24,
  color: "#0082C6"
};
export default SvgSys;