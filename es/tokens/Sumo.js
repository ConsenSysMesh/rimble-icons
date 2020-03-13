function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgSumo = React.forwardRef(function (props, ref) {
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
    d: "M13.546 6.813c2.553 2.675 3.2 3.147 3.821 3.317-2.156-.27-3.373-.423-5.405-1.49l-1.282 1.493 8.07 1.792c-2.524 2.146-3.618 3.29-5.204 5.26h-3.053c-1.342-1.963-2.237-2.6-3.96-3.395 2.293.212 3.568.353 5.43 1.455l1.395-1.567-8.108-1.753c1.886-1.554 2.983-2.59 5.242-5.112h3.054zM10.68 6.44c.697-.859.982-1.276 1.357-1.94.368.684.652 1.106 1.32 1.94H10.68zm2.678 11.12c-.699.859-.985 1.276-1.358 1.94-.367-.684-.652-1.106-1.32-1.94h2.678z",
    fill: "white"
  }));
});
SvgSumo.displayName = "SvgSumo";
SvgSumo.defaultProps = {
  size: 24,
  color: "#2D9CDB"
};
export default SvgSumo;