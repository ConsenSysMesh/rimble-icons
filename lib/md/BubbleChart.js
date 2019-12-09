"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBubbleChart = function SvgBubbleChart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    _react2.default.createElement("circle", { cx: 7.2, cy: 14.4, r: 3.2 }),
    _react2.default.createElement("circle", { cx: 14.8, cy: 18, r: 2 }),
    _react2.default.createElement("circle", { cx: 15.2, cy: 8.8, r: 4.8 })
  );
};

exports.default = SvgBubbleChart;