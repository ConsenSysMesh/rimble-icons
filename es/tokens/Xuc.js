var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgXuc = function SvgXuc(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#25AAE3",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M20.25 12a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0zm-2.828.26c.006-.094 0 0 0-.096 0-2.705-1.998-5.108-4.591-5.512V5.077l-1.68.523v1.053a5.412 5.412 0 00-4.577 5.343 5.417 5.417 0 004.758 5.374v1.551l1.68-.523v-1.085a5.422 5.422 0 004.081-3.51h-1.74a3.81 3.81 0 01-5.96.99 3.82 3.82 0 01-1.208-2.52l9.238-.014zm-8.985-1.662a3.82 3.82 0 017.108 0H8.438z",
      fill: "white"
    })
  );
};

export default SvgXuc;