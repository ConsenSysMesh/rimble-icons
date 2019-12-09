var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSalt = function SvgSalt(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "#1BEEF4"
    }),
    React.createElement("path", {
      d: "M12.375 7.834l4.353 9.16H8.022l4.353-9.16zm0-4.084l-7.125 15H19.5l-7.125-15z",
      fill: "#fff"
    })
  );
};

export default SvgSalt;