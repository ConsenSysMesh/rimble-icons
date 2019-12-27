var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgFlightLand = function SvgFlightLand(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "flightLand_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "flightLand_svg__c", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "flightLand_svg__b" },
      React.createElement("use", { xlinkHref: "#flightLand_svg__a", overflow: "visible" })
    ),
    React.createElement(
      "clipPath",
      { id: "flightLand_svg__d", clipPath: "url(#flightLand_svg__b)" },
      React.createElement("use", { xlinkHref: "#flightLand_svg__c", overflow: "visible" })
    ),
    React.createElement("path", {
      d: "M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z",
      clipPath: "url(#flightLand_svg__d)"
    })
  );
};

SvgFlightLand.displayName = "SvgFlightLand";
SvgFlightLand.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgFlightLand;