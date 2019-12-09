var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgZil = function SvgZil(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#49C1BF",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M6.75 5.46l8.335 4.038 2.134-.961L8.92 4.5l-2.169.96z",
      fill: "white",
      fillOpacity: 0.304
    }),
    React.createElement("path", {
      d: "M15.085 9.488l2.134-.96v2.148l-2.134.961V9.488zm0 9.963v-6.703l2.134-.97v6.713l-2.134.96z",
      fill: "white",
      fillOpacity: 0.646
    }),
    React.createElement("path", {
      d: "M6.75 5.463v2.173l5.77 2.802-5.77 2.858v2.142l8.335 4.03v-2.156l-5.66-2.753 5.66-2.91v-2.15L6.75 5.464z",
      fill: "white"
    })
  );
};

export default SvgZil;