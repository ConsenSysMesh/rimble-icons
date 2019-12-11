"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = (0, _styledComponents2.default)("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgBubbleChart = function SvgBubbleChart(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    _react2.default.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
    _react2.default.createElement("circle", { cx: 7.2, cy: 14.4, r: 3.2 }),
    _react2.default.createElement("circle", { cx: 14.8, cy: 18, r: 2 }),
    _react2.default.createElement("circle", { cx: 15.2, cy: 8.8, r: 4.8 })
  );
};

SvgBubbleChart.displayName = "SvgBubbleChart";
SvgBubbleChart.defaultProps = {
  size: 24
};
exports.default = SvgBubbleChart;