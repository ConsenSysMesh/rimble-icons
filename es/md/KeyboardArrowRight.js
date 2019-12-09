var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgKeyboardArrowRight = function SvgKeyboardArrowRight(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", height: props.size, width: props.size }, props),
    React.createElement("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" })
  );
};

export default SvgKeyboardArrowRight;