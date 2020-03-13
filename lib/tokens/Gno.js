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
var SvgGno = React.forwardRef(function (props, ref) {
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
    d: "M18.583 7.875l.15.248a8.113 8.113 0 011.142 4.153c-.014 4.401-3.536 7.974-7.875 7.974h-.014c-4.338 0-7.874-3.6-7.861-8.002 0-1.476.408-2.91 1.156-4.152l.136-.234.721.73a2.835 2.835 0 00-.34.676 3.068 3.068 0 001.823 3.918 3.018 3.018 0 002.706-.345L12 14.553l1.918-1.945c.177.124.38.221.598.304a2.943 2.943 0 003.768-1.808 3 3 0 00-.3-2.621l.599-.607zM7.023 9.489l2.257 2.276a1.54 1.54 0 01-.98.345c-.883 0-1.605-.731-1.605-1.627 0-.373.123-.718.327-.994zm7.874 2.138l2.23-2.262c.178.263.272.58.272.91 0 .897-.72 1.628-1.605 1.628a1.54 1.54 0 01-.897-.276zm-2.87 1.711L5.526 6.716l.258-.276a8.337 8.337 0 016.148-2.69h.014a8.39 8.39 0 016.257 2.827l.245.277-6.42 6.484h-.001zm-5.44-6.622l5.44 5.532L17.4 6.827c-1.441-1.463-3.4-2.304-5.44-2.304h-.014a7.561 7.561 0 00-5.359 2.193z",
    fill: "white"
  }));
});
SvgGno.displayName = "SvgGno";
SvgGno.defaultProps = {
  size: 24,
  color: "#00A6C4"
};
exports["default"] = SvgGno;