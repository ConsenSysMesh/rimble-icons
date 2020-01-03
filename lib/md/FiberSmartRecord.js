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

var SvgFiberSmartRecord = function SvgFiberSmartRecord(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), _react2["default"].createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z"
  }), _react2["default"].createElement("g", {
    fill: "#010101"
  }, _react2["default"].createElement("circle", {
    cx: 9,
    cy: 12,
    r: 8
  }), _react2["default"].createElement("path", {
    d: "M17 4.26v2.09a5.99 5.99 0 010 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"
  })));
};

SvgFiberSmartRecord.displayName = "SvgFiberSmartRecord";
SvgFiberSmartRecord.defaultProps = {
  size: 24,
  color: "inherit"
};
exports["default"] = SvgFiberSmartRecord;