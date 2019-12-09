var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgMtl = function SvgMtl(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#1E1F25",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M6 6.75h.75v10.5H6V6.75zM9.75 9h.75v6.75h-.75V9zm3.75 1.5h.75v3.75h-.75V10.5zm3.75-3.75H18v10.5h-.75V6.75z",
      fill: "white"
    })
  );
};

export default SvgMtl;