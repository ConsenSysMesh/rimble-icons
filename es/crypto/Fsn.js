var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgFsn = function SvgFsn(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#1D9AD7",
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
      d: "M19.5 9.159c-.756-.79-2.311-1.452-5.21-1.858a44.937 44.937 0 00-2.753-.299c-.715-.043-1.409-.086-2.08-.086-1.114 1.665-2.165 3.673-3.09 6.086-1.009 2.647-1.912 5.253-2.542 7.623h-.189c.063-2.541.483-5.423 1.345-8.413.568-1.942 1.24-3.652 1.997-5.146C3.573 7.43 1.135 8.476 0 9.97.968 7.6 3.846 5.593 8.238 4.888c2.333-3.48 5.085-5.04 7.376-4.356.798.235 1.47.747 2.017 1.473-.064-.042-.127-.085-.21-.106-1.681-.683-3.95.298-6.157 2.733h.105c4.938-.021 7.438 2.071 8.132 4.527zm-6.178 3.202c1.345 0 2.438 1.132 2.438 2.52 0 1.388-1.093 2.52-2.438 2.52-1.344 0-2.437-1.132-2.437-2.52 0-1.409 1.093-2.52 2.438-2.52z",
      fill: "white"
    })
  );
};

export default SvgFsn;