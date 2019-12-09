var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgMco = function SvgMco(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#103F68",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M11.985 3.763l7.14 4.113v8.25l-7.132 4.124-.058-.014-7.06-4.11v-8.25l7.06-4.113h.05zm-.023.854l-6.337 3.69v7.387l6.336 3.69.774-.448 5.64-3.244V8.308l-5.64-3.262-.773-.429zm-5.355 7.958l1.875-1.403 1.659 1.059v1.905l1.255 1.209-.001.567-1.21 1.132h-1.02l-2.557-4.47h-.001zm5.927 3.339l-.002-.57 1.25-1.208v-1.905l1.64-1.072 1.872 1.416-2.545 4.457h-1.008l-1.207-1.118zm-1.777-3.683l-.611-1.598h3.628l-.598 1.598.177 1.787-1.4.002-1.384.003.188-1.792zm1.196-2.036l-3.449-.002.642-2.865h5.597l.675 2.869-3.465-.002z",
      fill: "white"
    })
  );
};

export default SvgMco;