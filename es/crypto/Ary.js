var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgAry = function SvgAry(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#343434",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M17.938 15.832a.636.636 0 00.427-.645v.825c0 .285-.176.551-.446.645l-5.691 2.05a.604.604 0 01-.447 0L6.09 16.658a.675.675 0 01-.446-.645v-.825c0 .284.176.55.446.645l5.71 2.05a.604.604 0 00.446 0l5.692-2.05zm0-1.46a.65.65 0 00.427-.646v.825c0 .285-.176.551-.446.646l-5.691 2.05a.604.604 0 01-.447 0l-5.691-2.05a.675.675 0 01-.446-.645v-.835c0 .294.176.55.446.654l5.71 2.05a.604.604 0 00.446 0l5.692-2.05zm0-1.47a.66.66 0 00.437-.636v.825c0 .285-.177.55-.447.645l-5.691 2.05a.604.604 0 01-.446 0l-5.701-2.06a.675.675 0 01-.446-.645v-.824c0 .284.176.55.446.645l5.71 2.049a.605.605 0 00.446 0l5.692-2.05zM5.625 7.997a.675.675 0 01.446-.646l5.701-2.058a.605.605 0 01.446 0L17.92 7.35a.675.675 0 01.446.646v3.623c0 .286-.176.551-.446.646l-5.71 2.049a.605.605 0 01-.446 0l-5.692-2.05a.675.675 0 01-.446-.645V7.997z",
      fill: "white"
    })
  );
};

export default SvgAry;