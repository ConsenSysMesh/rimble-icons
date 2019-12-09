var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgGbp = function SvgGbp(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#BC3FE0",
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
      d: "M8.315 11.111V9.362c0-2.757 1.665-4.487 4.556-4.487 2.2 0 3.428.931 4.379 2.13L15.388 8.43c-.713-.874-1.388-1.387-2.496-1.387-1.328 0-2.12.912-2.12 2.377v1.691h4.933v1.978h-4.934v3.251h6.44v2.035H6.75v-1.483l1.565-.456v-3.347H6.75v-1.978h1.565z",
      fill: "white"
    })
  );
};

export default SvgGbp;