var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgNio = function SvgNio(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#70C9C9",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M12 10.323H8.383L12 4.125l3.617 6.198H12zm.491 7.302l1.886-3.232 1.809-3.098 3.689 6.33h-7.384zm-2.868-3.232l1.886 3.232H4.125l3.69-6.33 1.807 3.098z",
      fill: "white"
    })
  );
};

export default SvgNio;