var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSignalWifiStatusbar2Bar26X24Px = function SvgSignalWifiStatusbar2Bar26X24Px(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("path", {
      fillOpacity: 0.3,
      d: "M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z"
    }),
    React.createElement("path", { d: "M13.01 21.99l7.54-9.4C20.26 12.38 17.36 10 13 10c-4.36 0-7.26 2.38-7.55 2.59l7.54 9.4h.02z" }),
    React.createElement("path", { d: "M0 0h26v24H0z", fill: "none" })
  );
};

export default SvgSignalWifiStatusbar2Bar26X24Px;