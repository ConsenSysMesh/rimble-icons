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
var SvgAgrs = React.forwardRef(function (props, ref) {
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
    d: "M14.816 13c1.685-2.639 2.996-7 2.996-7l-2.808.637-1.028 3.637c-.097-2.727-1.967-3.725-1.967-3.725-1.498-.73-2.833-.409-3.795.093-1.191.62-2.057 1.7-2.472 2.943-.59 1.77-.518 3.754-.44 4.653.032.421.125.836.278 1.232 1.034 2.68 3.896 2.528 3.896 2.528 2.623-.093 4.217-3.182 4.217-3.182l.751 2.271c.674 1.14 2.165.713 2.472.649.054-.012.102-.018.157-.03l1.677-.256v-.73c-3.651.1-3.934-3.719-3.934-3.719zm-3.554 2.745c-.226.232-.51.397-.824.479-.68.17-1.203-.116-1.563-.466a2.953 2.953 0 01-.794-1.484c-.662-3.742.252-5.383.86-6.136a1.694 1.694 0 011.4-.649c2.359.123 2.888 5.057 2.888 5.057-.667 1.751-1.527 2.768-1.967 3.2z",
    fill: "white"
  }));
});
SvgAgrs.displayName = "SvgAgrs";
SvgAgrs.defaultProps = {
  size: 24,
  color: "#F49E00"
};
exports["default"] = SvgAgrs;