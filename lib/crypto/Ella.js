"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgElla = function SvgElla(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#396A28",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.555 9.909L12 8.355l-1.565 1.564-1.623-1.623L12 3.75l3.21 4.504-1.655 1.655zm-3.662.553L8.354 12l1.554 1.555-1.617 1.617L3.75 12l4.492-3.188 1.65 1.65zm4.188 3.103L15.645 12l-1.548-1.548 1.67-1.67L20.25 12l-4.533 3.202-1.636-1.637zm-3.629.533L12 15.645l1.537-1.537 1.637 1.637L12 20.25l-3.153-4.548 1.605-1.604zM12 9.395L14.604 12 12 14.604 9.396 12 12 9.395z",
      fill: "white"
    })
  );
};

exports.default = SvgElla;