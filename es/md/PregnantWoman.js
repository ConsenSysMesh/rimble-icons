var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgPregnantWoman = function SvgPregnantWoman(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "pregnantWoman_svg__a", d: "M0 0h24v24H0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "pregnantWoman_svg__b" },
      React.createElement("use", { xlinkHref: "#pregnantWoman_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#pregnantWoman_svg__b)",
      d: "M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9a3.285 3.285 0 00-2-3c0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"
    })
  );
};

SvgPregnantWoman.displayName = "SvgPregnantWoman";
SvgPregnantWoman.defaultProps = {
  size: 24
};
export default SvgPregnantWoman;