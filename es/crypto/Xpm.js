var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgXpm = function SvgXpm(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#FFD81B",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M18 11.671c0 3.318-2.57 4.446-4.732 4.446v.864h1.668v1.172h-1.668V19.5h-2.61v-1.347H9.063v-1.171h1.592v-.877c-.692 0-4.655-.164-4.655-4.674V6h2.591v5.639c0 2.354 2.075 2.332 2.075 2.332V6h2.602v7.971s2.14.12 2.14-2.365V6H18v5.671z",
      fill: "white"
    })
  );
};

export default SvgXpm;