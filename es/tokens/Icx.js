var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgIcx = function SvgIcx(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#1FC5C9",
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
      d: "M8.472 16.854l1.623-1.623a3.75 3.75 0 005.136-5.136l1.623-1.623a6 6 0 01-8.382 8.382zm-1.326-1.326a6 6 0 018.382-8.382l-1.623 1.623a3.75 3.75 0 00-5.136 5.136l-1.623 1.623zM18 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-12 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3z",
      fill: "white"
    })
  );
};

export default SvgIcx;