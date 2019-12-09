var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgBnb = function SvgBnb(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#F3BA2F",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M9.087 10.803L12 7.89l2.915 2.915L16.61 9.11 12 4.5 7.392 9.108l1.695 1.695zM4.5 12l1.695-1.695L7.89 12l-1.695 1.695L4.5 12zm4.587 1.197L12 16.11l2.915-2.915 1.695 1.695L12 19.5l-4.608-4.608-.002-.002 1.697-1.693zM16.11 12l1.695-1.695L19.5 12l-1.695 1.695L16.11 12zm-2.391-.002h.002V12L12 13.72l-1.718-1.717-.003-.003.003-.002.3-.302.147-.146L12 10.28 13.72 12l-.001-.002z",
      fill: "white"
    })
  );
};

export default SvgBnb;