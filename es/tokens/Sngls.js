function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgSngls = React.forwardRef(function (props, ref) {
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
    d: "M12.685 15.925l-.7 1.302-.698-1.302C7.064 15.598 3.75 12.45 3.75 12.45c0-.007 3.22-3.058 7.357-3.46l.547-.938.332-.551.562.938.317.55C17 9.384 20.22 12.45 20.22 12.45s-3.314 3.149-7.537 3.476zM4.449 12.45c-.008 0 3.184 2.181 6.39 2.643l-1.562-2.926.424-.736.39.729-.007.007 1.52 2.993c.122.007.245.007.368.007.122 0 .237 0 .36-.007l1.116-2.226.815-1.518.424.737-1.563 2.932c3.207-.454 6.398-2.582 6.398-2.642 0-.053-3.04-2.084-6.167-2.605l.475.827-.396.795-1.03-1.726a7.836 7.836 0 00-.418-.015c-.138 0-.282.007-.426.015l-1.052 1.726-.388-.759.496-.855c-3.127.528-6.167 2.604-6.167 2.604z",
    fill: "white"
  }));
});
SvgSngls.displayName = "SvgSngls";
SvgSngls.defaultProps = {
  size: 24,
  color: "#B30D23"
};
export default SvgSngls;