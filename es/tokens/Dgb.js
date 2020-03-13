function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgDgb = React.forwardRef(function (props, ref) {
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
    d: "M9.276 18.75l.36-.962-.638.064-.23.607c-.018.046-.033.094-.056.137-.05.094-.127.152-.235.153H7.061c-.011 0-.022-.007-.047-.015l.301-.814c-.55-.015-1.084-.024-1.617-.084.01-.1 3.047-7.759 3.168-7.99.03-.001.065-.007.101-.007h2.452c.025 0 .05 0 .074.002.248.019.386.229.3.467-.115.315-.236.629-.354.942l-1.543 4.105-.05.143c.044.002.078.007.112.005 2.322-.101 4.026-1.21 5.127-3.292.24-.455.41-.945.502-1.452.055-.296.072-.593-.002-.889a1.322 1.322 0 00-.524-.772 1.967 1.967 0 00-1.171-.363H5.625c.018-.045.026-.075.04-.102l1.042-1.876a.565.565 0 01.529-.314h4.4l.45-1.192h1.337c.033 0 .066-.002.097.002.096.015.15.09.136.188a.567.567 0 01-.036.118l-.279.744c-.016.042-.028.085-.045.135h.604c.015-.032.03-.065.043-.099l.372-.988c.038-.1.04-.1.139-.1.423 0 .847-.002 1.27 0 .178 0 .242.095.178.268-.101.276-.205.55-.309.826l-.045.13c.041.007.075.015.109.02a5.83 5.83 0 011.706.45c.413.187.788.43 1.098.773.418.46.626 1.012.659 1.635a4.478 4.478 0 01-.28 1.747c-.473 1.331-1.147 2.541-2.122 3.56a8.957 8.957 0 01-2.298 1.712c-.918.487-1.888.829-2.893 1.07-.09.023-.137.061-.168.15-.11.308-.227.614-.343.92-.071.187-.143.238-.339.238H9.276z",
    fill: "white"
  }));
});
SvgDgb.displayName = "SvgDgb";
SvgDgb.defaultProps = {
  size: 24,
  color: "#006AD2"
};
export default SvgDgb;