"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgTnt = function SvgTnt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#FF4081",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M10.418 16.127l.118 2.623s1.406-.238 2.871 0l.117-2.623h-3.106zM8.72 14.1s4.101-.358 6.503 0l.234-2.861a44.314 44.314 0 00-6.855 0L8.72 14.1zM19.5 6.708s-7.852-1.67-15 .12l.527 3.277.645-1.251s6.738-1.013 12.773 0l.586 1.252.469-3.398z",
      fill: "white"
    })
  );
};

exports.default = SvgTnt;