var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgLaptop = function SvgLaptop(props) {
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
      React.createElement("path", { id: "laptop_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "laptop_svg__b" },
      React.createElement("use", { xlinkHref: "#laptop_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#laptop_svg__b)",
      d: "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
    })
  );
};

export default SvgLaptop;