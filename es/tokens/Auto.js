var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgAuto = function SvgAuto(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#FAB431",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.375 14.45l-3.139-1.883.36-1.492 1.34.792V9.142l-4.304-2.566v5.925l-1.024.566 5.653 3.353L12 19.5l-6.375-3.733V8.3L12 4.5l6.375 3.8v6.15zM7.064 9.143V14l4.138-2.4V6.675L7.064 9.142zm3.072 4.757l-2.353 1.44L12 17.809l2.381-1.395-4.245-2.514z",
      fill: "white"
    })
  );
};

SvgAuto.displayName = "SvgAuto";
SvgAuto.defaultProps = {
  size: 24
};
export default SvgAuto;