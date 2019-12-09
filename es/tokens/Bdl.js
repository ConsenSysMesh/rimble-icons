var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgBdl = function SvgBdl(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#E54C40",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M6.996 6.463c-.015-.11.089-.176.148-.252.745-.737 1.487-1.478 2.226-2.223-.01 2.037.006 4.074-.008 6.11 1.536-.847 3.472-.884 5.052-.125-.002.131-.002.261-.002.393-1.26-.678-2.811-.764-4.156-.292-1.547.533-2.78 1.843-3.262 3.402.002-2.339-.001-4.676.002-7.013zm10.042 8.746a4.99 4.99 0 01-1.422 3.304 5.023 5.023 0 01-6.377.682 5.023 5.023 0 01-2.159-3.222 4.994 4.994 0 01.376-3.09 5.03 5.03 0 016.954-2.295 228.28 228.28 0 000 3.362c-.223-.463-.555-.877-.993-1.151-.868-.56-2.074-.534-2.912.073-.922.635-1.338 1.893-.972 2.951.328 1.044 1.365 1.81 2.462 1.797 1.054.027 2.072-.663 2.45-1.646.24-.557.18-1.173.184-1.762.005-3.041-.007-6.083-.005-9.123 0-.383.007-.765-.016-1.146.818.805 1.628 1.62 2.438 2.434-.017 2.944 0 5.888-.008 8.833z",
      fill: "white"
    })
  );
};

export default SvgBdl;