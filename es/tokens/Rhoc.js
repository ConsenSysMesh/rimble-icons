function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgRhoc = React.forwardRef(function (props, ref) {
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
    d: "M8.862 6.93a8.38 8.38 0 014.315-1.65c.159-.032.331.068.326.244.015.42.005.84.005 1.26.01.13-.059.3-.209.303-1.384.153-2.7.719-3.843 1.5-.108.061-.084.201-.075.303.08.737.026 1.479.047 2.217 3.73.011 7.463-.001 11.195.007.177-.016.365.086.35.284.02 1.257.005 2.513.008 3.768.003.683-.142 1.39-.556 1.947-.652.877-1.8 1.403-2.89 1.21-.773-.116-1.44-.595-1.908-1.204a8.405 8.405 0 01-4.383 1.662c-.161.002-.282-.156-.257-.31.005-.44-.01-.881.007-1.32.038-.233.324-.188.495-.227 1.307-.203 2.558-.752 3.627-1.53a28.007 28.007 0 01-.058-2.451c-3.744-.024-7.49-.002-11.234-.012-.165.019-.324-.105-.308-.28-.003-1.322-.002-2.645.002-3.968.007-.691.225-1.39.684-1.917.603-.687 1.514-1.126 2.438-1.072.885.035 1.697.538 2.222 1.236zM5.025 8.911c-.001.775-.002 1.55.002 2.327.925 0 1.849.013 2.774-.008.001-.755.011-1.51-.005-2.267-.014-.724-.669-1.365-1.396-1.35-.71-.029-1.358.593-1.375 1.298zm11.782 3.968c-.008.737-.002 1.474-.005 2.21-.004.295.085.583.255.823.356.508 1.064.73 1.643.505.535-.198.888-.757.882-1.32 0-.739.003-1.477-.003-2.216-.924-.008-1.848-.004-2.772-.003v.001z",
    fill: "white"
  }));
});
SvgRhoc.displayName = "SvgRhoc";
SvgRhoc.defaultProps = {
  size: 24,
  color: "#CC1E46"
};
export default SvgRhoc;