var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgChangeHistory = function SvgChangeHistory(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement("path", { d: "M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" })
  );
};

SvgChangeHistory.displayName = "SvgChangeHistory";
SvgChangeHistory.defaultProps = {
  size: 24
};
export default SvgChangeHistory;