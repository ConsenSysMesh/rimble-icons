var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgBlcn = function SvgBlcn(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#2AABE4",
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
      d: "M5.925 5.25h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm7.5 0h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm0 7.5h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm-7.5 0h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675z",
      fill: "white"
    })
  );
};

export default SvgBlcn;