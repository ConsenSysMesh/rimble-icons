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

var SvgGup = function SvgGup(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    d: "M11.992 9.51L9.904 7.405A24.427 24.427 0 0112 4.5c.767.912 1.467 1.88 2.092 2.894l-2.1 2.115zm4.289 2.107c.59 1.651 1.454 3.303.63 4.888a5.627 5.627 0 01-2.334 2.352c-2.714 1.44-6.074.382-7.504-2.352-.832-1.585.137-3.367.728-5.018.54-1.217 1.087-2.34 1.708-3.418l2.483 2.5 2.496-2.513c.657 1.135 1.224 2.304 1.793 3.562v-.001z",
    fill: "white"
  }));
};

SvgGup.displayName = "SvgGup";
SvgGup.defaultProps = {
  size: 24,
  color: "#37DCD8"
};
exports["default"] = SvgGup;