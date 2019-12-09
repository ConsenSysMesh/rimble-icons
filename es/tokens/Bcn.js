var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgBcn = function SvgBcn(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#F04086",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 23.998c6.626 0 11.998-5.372 11.998-11.999C23.998 5.372 18.627 0 12 0 5.372 0 0 5.372 0 12c0 6.626 5.372 11.998 12 11.998z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M17.578 12.566c-.473-.523-1.152-.847-2.04-.973v-.018c.777-.126 1.389-.445 1.804-.955.422-.506.651-1.144.647-1.803 0-1.096-.353-1.84-1.083-2.426-.73-.585-1.827-.778-3.313-.778h-5.61v5.222H4.76v2h8.796c.692 0 1.212.05 1.555.326.343.277.519.635.519 1.163 0 .529-.173.98-.519 1.264-.345.283-.866.47-1.556.47h-3.018v-1.556H7.982v3.556h5.795c1.474 0 2.6-.385 3.382-.983.781-.598 1.148-1.48 1.148-2.564a2.858 2.858 0 00-.73-1.945zm-4.345-1.736h-2.696V7.608h2.696c1.386 0 2.077.54 2.077 1.611 0 1.07-.691 1.611-2.077 1.611z",
      fill: "white"
    })
  );
};

export default SvgBcn;