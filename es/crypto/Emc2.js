var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgEmc2 = function SvgEmc2(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#00CCFF",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M5.92 14.37h3.298l-1.42 2.88H4.5l1.42-2.88zm1.88-3.81h3.298l-1.416 2.872h-3.3L7.8 10.56zm1.879-3.81h3.298L11.56 9.624H8.263L9.679 6.75z",
      fill: "white",
      fillOpacity: 0.4
    }),
    React.createElement("path", {
      d: "M9.208 14.37h3.298l-1.42 2.879H7.787l1.42-2.88v.001zm1.88-3.81h3.297l-1.416 2.871H9.671l1.416-2.871zm1.878-3.81h3.299l-1.417 2.872H11.55l1.416-2.872z",
      fill: "white",
      fillOpacity: 0.6
    }),
    React.createElement("path", {
      d: "M12.443 14.37h3.298l-1.42 2.879h-3.298l1.42-2.88v.001zm1.879-3.81h3.299l-1.416 2.871h-3.299l1.416-2.871zm1.88-3.81H19.5l-1.417 2.872h-3.297L16.2 6.75z",
      fill: "white"
    })
  );
};

export default SvgEmc2;