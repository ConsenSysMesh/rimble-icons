var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgUsd = function SvgUsd(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#6CDE07",
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
      d: "M16.875 14.366c0 1.927-1.565 3.207-3.874 3.4V19.5h-1.583v-1.752a8.621 8.621 0 01-4.293-1.736l1.164-1.594c1.037.806 2.019 1.332 3.202 1.508V12.49c-2.656-.666-3.893-1.63-3.893-3.61 0-1.893 1.546-3.19 3.82-3.365V4.5h1.583v1.051a7.118 7.118 0 013.42 1.332L15.4 8.53c-.8-.578-1.618-.946-2.473-1.12v3.329c2.765.665 3.947 1.734 3.947 3.627zM11.49 10.37V7.286c-1.145.088-1.745.702-1.745 1.473 0 .734.345 1.208 1.746 1.612h-.001zm3.239 4.118c0-.788-.383-1.261-1.801-1.665v3.173c1.146-.088 1.8-.667 1.8-1.508z",
      fill: "white"
    })
  );
};

export default SvgUsd;