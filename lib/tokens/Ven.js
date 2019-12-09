"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgVen = function SvgVen(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#15BDFF",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M11.053 18.55L5.28 6.785a.285.285 0 01.255-.41h2.001c.107 0 .208.06.255.154l4.216 8.536a1.024 1.024 0 001.84 0l4.202-8.529a.286.286 0 01.256-.154h.248c.148 0 .242.154.175.282L12.893 18.55a1.024 1.024 0 01-1.84 0z",
      fill: "white"
    })
  );
};

exports.default = SvgVen;