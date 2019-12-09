var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgTheta = function SvgTheta(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#2AB8E6",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M8.22 4.5h7.56l.72.745v13.51l-.72.745H8.22l-.72-.745V5.245l.72-.745zm.72 13.51h6.12V5.99H8.94v12.02zm5.35-3.878h-1.565v1.697h-1.413v-1.696H9.747v-1.462h4.543v1.461zm0-4.186v1.46H9.747v-1.46h1.565V8.249h1.413v1.697h1.566z",
      fill: "white"
    })
  );
};

export default SvgTheta;