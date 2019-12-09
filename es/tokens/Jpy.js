var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgJpy = function SvgJpy(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#EAC749",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.161 14.033v1.409h3.797v1.716h-3.797v1.967h-2.322v-1.967H7.042v-1.716h3.797v-1.409H7.042v-1.716h3.128L5.625 5.625h2.814l3.6 5.65 3.6-5.65h2.736l-4.565 6.692h3.148v1.716h-3.797z",
      fill: "white"
    })
  );
};

export default SvgJpy;