var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSentimentSatisfied = function SvgSentimentSatisfied(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("circle", { cx: 15.5, cy: 9.5, r: 1.5 }),
    React.createElement("circle", { cx: 8.5, cy: 9.5, r: 1.5 }),
    React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88a5.495 5.495 0 0010.24 0h-1.67c-.7 1.19-1.97 2-3.45 2z" })
  );
};

export default SvgSentimentSatisfied;