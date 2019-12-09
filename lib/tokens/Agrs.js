"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAgrs = function SvgAgrs(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#F49E00",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M14.816 13c1.685-2.639 2.996-7 2.996-7l-2.808.637-1.028 3.637c-.097-2.727-1.967-3.725-1.967-3.725-1.498-.73-2.833-.409-3.795.093-1.191.62-2.057 1.7-2.472 2.943-.59 1.77-.518 3.754-.44 4.653.032.421.125.836.278 1.232 1.034 2.68 3.896 2.528 3.896 2.528 2.623-.093 4.217-3.182 4.217-3.182l.751 2.271c.674 1.14 2.165.713 2.472.649.054-.012.102-.018.157-.03l1.677-.256v-.73c-3.651.1-3.934-3.719-3.934-3.719zm-3.554 2.745c-.226.232-.51.397-.824.479-.68.17-1.203-.116-1.563-.466a2.953 2.953 0 01-.794-1.484c-.662-3.742.252-5.383.86-6.136a1.694 1.694 0 011.4-.649c2.359.123 2.888 5.057 2.888 5.057-.667 1.751-1.527 2.768-1.967 3.2z",
      fill: "white"
    })
  );
};

exports.default = SvgAgrs;