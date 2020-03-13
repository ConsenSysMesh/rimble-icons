function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgEdo = React.forwardRef(function (props, ref) {
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
    d: "M9.795 17.905l2.012-2.022 2.02 2.023-1.288 1.291a1.034 1.034 0 01-1.463 0l-1.281-1.291zm5.213-6.931l-2.02-2.023 2.02-2.022 2.02 2.022-2.02 2.023zm-.502 6.272l-2.02-2.022 5.422-5.432 1.289 1.29c.404.406.404 1.06 0 1.465l-4.691 4.7zm-5.553-.208l-2.019-2.023 5.414-5.422 2.019 2.022-5.414 5.423zm-2.866-2.85l-1.29-1.292a1.037 1.037 0 01.01-1.464l1.289-1.291 2.02 2.023-2.029 2.024zm8.075-8.091L8.74 11.525 6.72 9.503l4.691-4.7a1.033 1.033 0 011.463 0l1.288 1.294z",
    fill: "white"
  }));
});
SvgEdo.displayName = "SvgEdo";
SvgEdo.defaultProps = {
  size: 24,
  color: "#242424"
};
export default SvgEdo;