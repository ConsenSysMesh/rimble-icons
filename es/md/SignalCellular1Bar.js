var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSignalCellular1Bar = function SvgSignalCellular1Bar(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement("path", { fillOpacity: 0.3, d: "M2 22h20V2z" }),
    React.createElement("path", { d: "M12 12L2 22h10z" })
  );
};

SvgSignalCellular1Bar.displayName = "SvgSignalCellular1Bar";
SvgSignalCellular1Bar.defaultProps = {
  size: 24
};
export default SvgSignalCellular1Bar;