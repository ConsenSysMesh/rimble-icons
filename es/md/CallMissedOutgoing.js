var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgCallMissedOutgoing = function SvgCallMissedOutgoing(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "callMissedOutgoing_svg__a", d: "M24 24H0V0h24v24z" })
    ),
    React.createElement(
      "clipPath",
      { id: "callMissedOutgoing_svg__b" },
      React.createElement("use", { xlinkHref: "#callMissedOutgoing_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#callMissedOutgoing_svg__b)",
      d: "M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"
    })
  );
};

export default SvgCallMissedOutgoing;