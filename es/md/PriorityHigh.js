var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgPriorityHigh = function SvgPriorityHigh(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("circle", { cx: 12, cy: 19, r: 2 }),
    React.createElement("path", { d: "M10 3h4v12h-4z" })
  );
};

export default SvgPriorityHigh;