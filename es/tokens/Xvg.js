var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgXvg = function SvgXvg(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#00CBFF",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M7.207 7.751L6 5.25h12l-1.194 2.501H18L11.963 20.25 6 7.751h1.207zm0 0l4.829 9.998 4.77-9.998H7.208z",
      fill: "white"
    }),
    React.createElement("path", { opacity: 0.504, d: "M12 18.375L6 5.25h12l-6 13.125z", fill: "white" })
  );
};

export default SvgXvg;