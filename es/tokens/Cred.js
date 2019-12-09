var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgCred = function SvgCred(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#37E8A3",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M9.102 11.975l2.611 2.62L18.561 7.7l.939.952-7.787 7.847-3.55-3.572.939-.954zm1.582-.233L14.899 7.5l.94.953-4.213 4.245-.94-.956zm-1.707 3.622l-.927.935-3.55-3.572.938-.952 3.54 3.59z",
      fill: "white"
    })
  );
};

export default SvgCred;