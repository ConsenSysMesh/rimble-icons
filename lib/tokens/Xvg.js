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

var SvgXvg = function SvgXvg(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    d: "M7.207 7.751L6 5.25h12l-1.194 2.501H18L11.963 20.25 6 7.751h1.207zm0 0l4.829 9.998 4.77-9.998H7.208z",
    fill: "white"
  }), _react2["default"].createElement("path", {
    opacity: 0.504,
    d: "M12 18.375L6 5.25h12l-6 13.125z",
    fill: "white"
  }));
};

SvgXvg.displayName = "SvgXvg";
SvgXvg.defaultProps = {
  size: 24,
  color: "#00CBFF"
};
exports["default"] = SvgXvg;