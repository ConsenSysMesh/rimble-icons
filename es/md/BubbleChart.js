var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgBubbleChart = function SvgBubbleChart(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("circle", { cx: 7.2, cy: 14.4, r: 3.2 }),
    React.createElement("circle", { cx: 14.8, cy: 18, r: 2 }),
    React.createElement("circle", { cx: 15.2, cy: 8.8, r: 4.8 })
  );
};

export default SvgBubbleChart;