var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSignalCellularNull = function SvgSignalCellularNull(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("path", { d: "M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" }),
    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

export default SvgSignalCellularNull;