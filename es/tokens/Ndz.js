var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgNdz = function SvgNdz(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#622FBA",
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
      d: "M13.94 13.032c-.066.02-.129.045-.19.073l-2.757-2.865a1.433 1.433 0 00-.855-2.096V6.14L9.4 5.727l1.704-.986a1.788 1.788 0 011.792 0l3.389 1.962-1.34.775a1.434 1.434 0 10-1.005 2.678v2.876zm.853 0v-2.877a1.431 1.431 0 00.819-2.08l1.522-.88.728.42a1.78 1.78 0 01.888 1.54v5.69c0 .634-.338 1.22-.889 1.54l-3.067 1.775v-2.393a1.432 1.432 0 00-.001-2.735zm-1.67.652a1.433 1.433 0 00.817 2.083v2.888l-1.044.604a1.788 1.788 0 01-1.792 0l-3.649-2.112 1.371-1.07a1.433 1.433 0 001.472.226 1.433 1.433 0 00-.161-2.703v-2.698c.079-.022.155-.05.228-.085l2.758 2.867zm-3.839-.06a1.433 1.433 0 00-.92 1.731l-1.703 1.332-.522-.302a1.779 1.779 0 01-.889-1.54v-5.69c0-.634.338-1.22.889-1.54l2.404-1.391.742.414v1.53a1.432 1.432 0 000 2.71v2.746zm.466-3.482a.62.62 0 11-.045-1.238.62.62 0 01.045 1.238zm0 5.457a.621.621 0 11-.045-1.242.621.621 0 01.045 1.242zm4.616-6.192a.62.62 0 11-.044-1.24.62.62 0 01.044 1.24zm0 5.612a.62.62 0 11-.001-1.24.62.62 0 01.001 1.24z",
      fill: "white"
    })
  );
};

export default SvgNdz;