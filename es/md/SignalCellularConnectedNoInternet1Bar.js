var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSignalCellularConnectedNoInternet1Bar = function SvgSignalCellularConnectedNoInternet1Bar(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    React.createElement("path", { fillOpacity: 0.3, d: "M22 8V2L2 22h16V8z" }),
    React.createElement("path", { d: "M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" })
  );
};

export default SvgSignalCellularConnectedNoInternet1Bar;