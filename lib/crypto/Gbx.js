"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgGbx = function SvgGbx(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#1666AF",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M11.774 8.255v1.544H8.25c-.457 0-1.02.161-1.44.458-.52.369-.81.922-.81 1.745 0 .824.29 1.377.81 1.745.42.297.983.458 1.44.458h1.5v1.545h-1.5a4.086 4.086 0 01-2.29-.73c-.921-.654-1.459-1.678-1.459-3.018 0-1.34.538-2.364 1.459-3.018a4.085 4.085 0 012.29-.73h3.525zm-3.75 4.636v-1.545h3.75v4.404h-1.499v-2.859h-2.25zm6.226-3.096V8.25h5.25v7.5h-6.752V9.8h1.5v4.404H18V9.796l-3.75-.001z",
      fill: "white"
    })
  );
};

exports.default = SvgGbx;