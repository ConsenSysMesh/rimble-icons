var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgLrc = function SvgLrc(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#2AB6F6",
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
      d: "M12 4.5l6.75 9.4L12 19.5l-6.75-5.6L12 4.5zm-.88 5l-2.935 4 2.934 2.4V9.5zm1.76 0v6.4l2.935-2.4-2.934-4z",
      fill: "white"
    })
  );
};

export default SvgLrc;