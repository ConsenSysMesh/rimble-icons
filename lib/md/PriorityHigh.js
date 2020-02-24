"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgPriorityHigh = function SvgPriorityHigh(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), _react2["default"].createElement("circle", {
    cx: 12,
    cy: 19,
    r: 2
  }), _react2["default"].createElement("path", {
    d: "M10 3h4v12h-4z"
  }), _react2["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
};

SvgPriorityHigh.displayName = "SvgPriorityHigh";
SvgPriorityHigh.defaultProps = {
  size: 24,
  color: "inherit"
};
exports["default"] = SvgPriorityHigh;