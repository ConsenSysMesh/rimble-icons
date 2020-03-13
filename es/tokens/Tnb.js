function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgTnb = React.forwardRef(function (props, ref) {
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
    d: "M11.698 8.893h.003l-.023.097-.195.92h-.022l-1.285 5.465H8.542l1.31-5.464H7.653l-1.234 5.464H4.622l1.633-6.75h5.5l-.057.268zm3.106-.268h2.723c2.342.107 2.124 1.66 2.124 1.66h.599l-.218.643h-.545c-.162.59-1.252.911-1.252.911 1.252.161 1.198 1.125 1.198 1.125h.6l-.164.643h-.49c-.126.893-.917 1.326-1.567 1.533a4.015 4.015 0 01-1.215.182H13.17l1.634-6.697zM5.492 9.911H3.75l.327-1.286h1.742l-.327 1.286zm7.461 4.714l-1.416-3.322.6-2.57 1.415 3.16-.599 2.732zm4.166-3.322a.736.736 0 00.52-.211.717.717 0 000-1.023.74.74 0 00-.52-.212h-1.061l-.327 1.446h1.388zm-.367 2.786c.488 0 .884-.372.884-.83 0-.459-.393-.83-.884-.83h-1.276l-.394 1.66h1.67z",
    fill: "white"
  }));
});
SvgTnb.displayName = "SvgTnb";
SvgTnb.defaultProps = {
  size: 24,
  color: "#FFC04E"
};
export default SvgTnb;