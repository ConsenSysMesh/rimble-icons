function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgRdd = React.forwardRef(function (props, ref) {
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
    opacity: 0.75,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.52 20.25c-4.29 0-7.77-3.445-7.77-7.694 0-4.248 3.48-7.693 7.77-7.693 4.293 0 7.772 3.445 7.772 7.693 0 4.25-3.48 7.694-7.772 7.694zm1.343-13.183c1.812.742 3.114 2.138 4.038 4.019l.697-.486c-.783-1.884-2.23-3.364-4.557-4.324l-.178.791z",
    fill: "white"
  }), React.createElement("path", {
    d: "M20.244 6.99c0-1.789-1.466-3.24-3.274-3.24-1.807 0-3.273 1.451-3.273 3.24 0 .172.013.342.04.51 1.09.635 1.965 1.546 2.665 2.683.187.032.378.05.568.05 1.808 0 3.274-1.452 3.274-3.242z",
    fill: "white"
  }));
});
SvgRdd.displayName = "SvgRdd";
SvgRdd.defaultProps = {
  size: 24,
  color: "#E30613"
};
export default SvgRdd;