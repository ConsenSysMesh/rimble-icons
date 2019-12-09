var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSignalCellularConnectedNoInternet0Bar = function SvgSignalCellularConnectedNoInternet0Bar(props) {
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
    React.createElement("path", { d: "M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z" })
  );
};

export default SvgSignalCellularConnectedNoInternet0Bar;