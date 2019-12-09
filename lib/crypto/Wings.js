"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgWings = function SvgWings(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#0DC9F7",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M14.178 11.804l-2.284 1.773-.935-3.243-5.418-1.452 7.11.365 1.527 2.557z",
      fill: "white",
      fillOpacity: 0.305
    }),
    _react2.default.createElement("path", {
      d: "M6.203 17.995l12.236-9.497 1.061 2.36-1.391-.386-.049 2.448-11.857 5.075z",
      fill: "white",
      fillOpacity: 0.7
    }),
    _react2.default.createElement("path", {
      d: "M17.097 13.335l-3.56-6.12L4.5 6.75l6.887 1.846 1.868 6.367 3.842-1.628z",
      fill: "white"
    })
  );
};

exports.default = SvgWings;