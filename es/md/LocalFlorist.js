var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgLocalFlorist = function SvgLocalFlorist(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("path", { d: "M12 22a9 9 0 009-9 9 9 0 00-9 9zM5.6 10.25a2.5 2.5 0 003.92 2.06l-.02.19a2.5 2.5 0 005 0l-.02-.19c.4.28.89.44 1.42.44a2.5 2.5 0 002.5-2.5c0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 00-3.92-2.06l.02-.19a2.5 2.5 0 00-5 0l.02.19c-.4-.28-.89-.44-1.42-.44a2.5 2.5 0 00-2.5 2.5c0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5a2.5 2.5 0 010 5 2.5 2.5 0 010-5zM3 13a9 9 0 009 9 9 9 0 00-9-9z" })
  );
};

export default SvgLocalFlorist;