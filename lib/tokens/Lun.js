"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);
var SvgLun = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size,
    ref: ref
  }), React.createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), React.createElement("path", {
    d: "M11.86 4.536a.286.286 0 01.279 0L18.308 8a.27.27 0 010 .47l-5.366 3.026a1.243 1.243 0 00-.73-.405V9.446a1.21 1.21 0 001.025-1.183c0-.664-.552-1.202-1.234-1.202-.682 0-1.234.538-1.234 1.202 0 .59.439 1.081 1.016 1.182v1.648a1.24 1.24 0 00-.72.402L5.699 8.483a.269.269 0 010-.472l6.162-3.473-.001-.002zm6.466 4.365a.284.284 0 01.38.098.271.271 0 01.039.137l.005 6.724a.27.27 0 01-.14.236l-5.973 3.367c-.186.105-.418-.026-.418-.235l-.005-5.77a1.24 1.24 0 00.74-.416l1.492.836a1.17 1.17 0 00-.027.471c.094.658.719 1.115 1.393 1.023.675-.093 1.145-.701 1.05-1.359-.094-.658-.72-1.115-1.394-1.022a1.233 1.233 0 00-.841.508l-1.463-.82a1.153 1.153 0 00-.019-.859l5.181-2.92V8.9zm-13.07.234c0-.159.133-.272.279-.272.049 0 .098.013.14.037l5.186 2.924c-.115.273-.121.577-.018.855l-1.461.82a1.234 1.234 0 00-.842-.508c-.675-.093-1.298.365-1.393 1.022-.096.657.375 1.265 1.05 1.358.675.093 1.297-.365 1.393-1.022a1.17 1.17 0 00-.027-.472l1.491-.836c.187.219.447.366.733.415l-.005 5.772c0 .209-.232.34-.418.234l-5.975-3.367a.27.27 0 01-.139-.235l.006-6.725",
    fill: "white"
  }));
});
SvgLun.displayName = "SvgLun";
SvgLun.defaultProps = {
  size: 24,
  color: "#F55749"
};
exports["default"] = SvgLun;