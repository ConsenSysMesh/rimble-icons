var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgDash = function SvgDash(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#1C75BC",
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
      d: "M19.928 9.728L18.4 14.514s-.943 2.386-3.185 2.386H4.398l.773-2.385h9.8l1.542-4.787H6.728l.758-2.385h10.757c2.357 0 1.685 2.385 1.685 2.385zM4.786 11.015h5.8l-.743 2.213H4.027l.758-2.213z",
      fill: "white"
    })
  );
};

export default SvgDash;