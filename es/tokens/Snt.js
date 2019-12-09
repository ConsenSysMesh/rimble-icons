var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSnt = function SvgSnt(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#5B6DEE",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M9.975 11.265a6.862 6.862 0 00-1.248.108c.339-3.135 2.952-5.51 6.063-5.51 1.905 0 3.21.934 3.21 2.864 0 1.931-1.567 2.864-3.852 2.864-1.688 0-2.486-.325-4.173-.325v-.001zm-.123 1.144c-2.285 0-3.852.933-3.852 2.864 0 1.93 1.305 2.864 3.21 2.864 3.111 0 5.724-2.374 6.063-5.51-.412.074-.83.11-1.248.108-1.688 0-2.486-.326-4.173-.326",
      fill: "white"
    })
  );
};

export default SvgSnt;