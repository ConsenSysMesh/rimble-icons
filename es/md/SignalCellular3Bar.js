var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSignalCellular3Bar = function SvgSignalCellular3Bar(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("path", { fillOpacity: 0.3, d: "M2 22h20V2z" }),
    React.createElement("path", { d: "M17 7L2 22h15z" }),
    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

export default SvgSignalCellular3Bar;