var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgMona = function SvgMona(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#DEC799",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M17.648 10.06l-1.07-4.81-2.097 3.31a10.572 10.572 0 00-4.963 0L7.426 5.25l-1.072 4.81c-1.151.921-1.854 2.125-1.854 3.447 0 2.895 3.357 5.242 7.498 5.242 4.14 0 7.498-2.348 7.498-5.242-.001-1.322-.698-2.525-1.85-3.447h.002zm-9.816 2.202h-.5l1.22-1.407h.888l-1.608 1.407zM11.96 15.7l-2.075-3.653.512-.293.463.814h2.266l.483-.818.507.302L11.96 15.7zm4.21-3.438l-1.61-1.407h.894l1.218 1.407h-.503zm-4.2 2.262l-.776-1.365h1.581l-.806 1.365z",
      fill: "white"
    })
  );
};

export default SvgMona;