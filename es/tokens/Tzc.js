var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgTzc = function SvgTzc(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#374851",
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
      d: "M13.275 11.55v5.698c.153-.037.303-.08.45-.13v2.183a7.523 7.523 0 01-3 .091V11.55H8.1v-2.1h7.8v2.1h-2.625zm1.05 7.582v-2.257a5.4 5.4 0 10-4.65 0v2.258a7.5 7.5 0 114.65 0z",
      fill: "white"
    })
  );
};

export default SvgTzc;