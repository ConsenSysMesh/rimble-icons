var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgUsdt = function SvgUsdt(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#3AA787",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M13.481 10.401V8.616h4.083v-2.72H6.447v2.72h4.083V10.4c-3.318.152-5.812.81-5.812 1.597 0 .787 2.495 1.444 5.812 1.598v5.717h2.952v-5.718c3.312-.153 5.802-.81 5.802-1.596 0-.787-2.49-1.443-5.802-1.596V10.4zm.001 2.708v-.001a24.23 24.23 0 01-1.464.03c-.762 0-1.298-.02-1.487-.031v.003c-2.931-.13-5.119-.64-5.119-1.251 0-.611 2.189-1.121 5.12-1.251v1.993c.191.013.74.045 1.499.045.91 0 1.368-.037 1.452-.045v-1.993c2.925.13 5.108.641 5.108 1.25 0 .608-2.184 1.12-5.108 1.25",
      fill: "white"
    })
  );
};

export default SvgUsdt;