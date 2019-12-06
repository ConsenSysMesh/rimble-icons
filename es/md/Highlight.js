var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgHighlight = function SvgHighlight(props) {
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
      React.createElement("path", { id: "highlight_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "highlight_svg__b" },
      React.createElement("use", { xlinkHref: "#highlight_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      d: "M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z",
      clipPath: "url(#highlight_svg__b)"
    })
  );
};

export default SvgHighlight;