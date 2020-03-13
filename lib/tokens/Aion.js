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
var SvgAion = React.forwardRef(function (props, ref) {
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
    d: "M11.978 17.363c-2.967 0-5.382-2.4-5.382-5.348 0-2.949 2.415-5.348 5.382-5.348 2.968 0 5.382 2.399 5.382 5.348 0 2.948-2.414 5.348-5.382 5.348zm0-9.648c-2.386 0-4.327 1.928-4.327 4.3 0 2.37 1.941 4.3 4.327 4.3 2.387 0 4.328-1.93 4.328-4.3 0-2.372-1.941-4.3-4.328-4.3zm3.769-1.812a7.228 7.228 0 00-3.769-1.054 7.252 7.252 0 00-3.5.898l-.512-.915a8.312 8.312 0 018.333.179l-.552.892zm1.571 12.383l-.681-.8a7.14 7.14 0 002.553-5.471h1.055a8.181 8.181 0 01-2.927 6.27zm-5.34 1.942a8.312 8.312 0 01-5.262-1.879l.672-.806a7.251 7.251 0 004.59 1.638c1.17 0 2.286-.27 3.317-.8l.485.93a8.33 8.33 0 01-3.802.918z",
    fill: "white"
  }), React.createElement("path", {
    opacity: 0.5,
    d: "M19.012 10.069a7.167 7.167 0 00-1.422-2.693l.675-.56a8.034 8.034 0 011.594 3.02l-.846.233zM5.145 16.482A8.057 8.057 0 013.8 12.015c0-2.222.885-4.296 2.493-5.842l.61.628a7.173 7.173 0 00-2.224 5.214c0 1.424.415 2.803 1.2 3.987l-.734.48z",
    fill: "white"
  }));
});
SvgAion.displayName = "SvgAion";
SvgAion.defaultProps = {
  size: 24,
  color: "#00BFEC"
};
exports["default"] = SvgAion;