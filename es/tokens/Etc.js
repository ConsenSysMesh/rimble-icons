var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgEtc = function SvgEtc(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#328332",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M11.992 12.415l-5.041-.433 5.04-2.851v3.284zm0 3.345v5.205c-1.753-2.729-3.685-5.732-5.242-8.162 1.838 1.034 3.756 2.117 5.242 2.957zm0-7.551L6.75 11.134 11.992 3v5.209z",
      fill: "white"
    }),
    React.createElement("path", {
      d: "M17.032 11.982l-5.04.433V9.13l5.04 2.851zm-5.04 3.779c1.485-.84 3.402-1.923 5.24-2.958-1.556 2.431-3.488 5.434-5.24 8.161v-5.203zm0-7.552V3l5.24 8.134-5.24-2.925z",
      fill: "white",
      fillOpacity: 0.601
    }),
    React.createElement("path", {
      opacity: 0.2,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.992 12.415l5.04-.433-5.04 2.831v-2.398z",
      fill: "white"
    }),
    React.createElement("path", {
      opacity: 0.603,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.991 12.415l-5.04-.433 5.04 2.831v-2.398z",
      fill: "white"
    })
  );
};

export default SvgEtc;