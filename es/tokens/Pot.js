var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgPot = function SvgPot(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#105B2F",
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
      d: "M9.025 13.635l-.293 1.49-.532 2.738c-.015.083-.036.139-.141.137-.662-.01-1.323-.015-1.985-.023-.015 0-.032-.01-.074-.026l1.492-7.455H6.236c.003-.055.001-.088.007-.12.077-.403.16-.805.23-1.209.02-.112.07-.14.175-.14.308.003.615-.008.921.002.147.005.203-.037.231-.181.171-.891.354-1.78.53-2.669.02-.106.044-.178.182-.178 1.506.004 3.013-.01 4.519.01.879.01 1.76.056 2.625.233.298.062.6.141.876.264.793.353 1.271.963 1.404 1.809.206 1.313-.072 2.52-.915 3.571-.623.774-1.476 1.209-2.43 1.473-.755.209-1.531.274-2.313.275-1.016.003-2.032 0-3.048 0h-.204v-.001zm.416-2.053h.212c1.075 0 2.15.002 3.225-.002.229 0 .46-.01.688-.037.868-.104 1.527-.52 1.948-1.275.181-.328.242-.708.172-1.076-.088-.523-.4-.864-.93-.96a7.37 7.37 0 00-1.177-.128c-1.104-.02-2.208-.012-3.313-.015-.04 0-.08.006-.133.011l-.183.936h3.068l-.282 1.454H9.658l-.217 1.091z",
      fill: "white"
    })
  );
};

SvgPot.displayName = "SvgPot";
SvgPot.defaultProps = {
  size: 24
};
export default SvgPot;