var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSub = function SvgSub(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#E53431",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M9.088 3.985a.188.188 0 01.225 0l.943.707a.187.187 0 11-.226.3l-.83-.62-2.697 2.022 11.85 8.891a.19.19 0 010 .302l-.871.653a.187.187 0 01-.299-.178.189.189 0 01.074-.124l.67-.502-11.851-8.89a.186.186 0 010-.3l3.012-2.26zm3.013 0a.185.185 0 01.224-.001l6.027 4.52a.184.184 0 01.064.21.186.186 0 01-.178.128h-3.012a.191.191 0 01-.113-.037L11.16 5.839a.188.188 0 11.225-.301l3.905 2.928h2.385l-5.46-4.095-3.78 2.835a.188.188 0 11-.226-.302l3.893-2.919zM6.907 7.882a.189.189 0 01.226.301l-.631.473 11.85 8.89a.188.188 0 010 .302l-3.012 2.26a.19.19 0 01-.225 0l-.873-.655a.189.189 0 11.228-.301l.757.568 2.7-2.025L6.073 8.806a.19.19 0 010-.301l.833-.623h.002zm-.719 7.364v.002H9.2c.04-.001.08.012.112.037l3.912 2.933a.187.187 0 01.07.197.188.188 0 01-.295.105l-3.86-2.896H6.755l5.46 4.095 3.773-2.829a.189.189 0 11.226.302l-3.885 2.913a.188.188 0 01-.226 0l-6.028-4.52a.187.187 0 01-.184-.16.188.188 0 01.298-.179z",
      fill: "white"
    })
  );
};

export default SvgSub;