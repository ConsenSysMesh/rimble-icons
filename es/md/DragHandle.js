var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgDragHandle = function SvgDragHandle(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", height: props.size, width: props.size }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "dragHandle_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "dragHandle_svg__b" },
      React.createElement("use", { xlinkHref: "#dragHandle_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#dragHandle_svg__b)",
      d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z"
    })
  );
};

export default SvgDragHandle;