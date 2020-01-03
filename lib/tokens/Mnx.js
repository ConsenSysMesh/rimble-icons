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

var SvgMnx = function SvgMnx(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.147 20.24C6.99 19.803 3.75 16.28 3.75 12c0-4.281 3.24-7.804 7.397-8.24v2.528A5.775 5.775 0 006.252 12a5.775 5.775 0 004.895 5.712v2.527zm1.631-16.49c3.923.36 7.053 3.463 7.461 7.378h-2.522a5.775 5.775 0 00-4.938-4.856V3.75zm7.472 9.013c-.361 3.967-3.513 7.125-7.472 7.487v-2.522a5.775 5.775 0 004.955-4.965h2.517z",
    fill: "white"
  }));
};

SvgMnx.displayName = "SvgMnx";
SvgMnx.defaultProps = {
  size: 24,
  color: "#00ADEF"
};
exports["default"] = SvgMnx;