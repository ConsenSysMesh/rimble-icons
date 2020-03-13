function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgLsk = React.forwardRef(function (props, ref) {
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
    d: "M10.687 18.718c-.01.011-.032.021-.042.032H9.48c-.021 0-.032-.01-.042-.021l-3.431-3.876a.067.067 0 010-.062l4.273-7.377c.021-.03.073-.03.094 0l1.195 2.069c.01.01.01.031 0 .053l-2.89 4.983c-.01.02 0 .041.01.063l1.726 1.943a.079.079 0 00.042.02h2.038c.052 0 .072.053.041.084l-1.85 2.09zm1.267-14.186c.022-.043.074-.043.084 0l5.957 10.237c.011.022 0 .043-.01.063l-3.43 3.876a.079.079 0 01-.043.021h-2.786c-.052 0-.073-.052-.041-.083l1.86-2.11 1.748-1.965c.02-.021.02-.042.01-.062l-3.307-5.705-1.247-2.152c-.01-.01-.01-.031 0-.053l1.205-2.067z",
    fill: "white"
  }));
});
SvgLsk.displayName = "SvgLsk";
SvgLsk.defaultProps = {
  size: 24,
  color: "#0D4EA0"
};
export default SvgLsk;