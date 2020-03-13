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
var SvgEbst = React.forwardRef(function (props, ref) {
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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.446 12.43c-.02-.27-.02-.54-.004-.81h-2.1L3 9.748h4.87A6.037 6.037 0 0113.466 6c3.333 0 6.034 2.687 6.034 6s-2.701 6-6.034 6a6.037 6.037 0 01-5.574-3.696H3l2.342-1.873h2.104zm9.457-.318c0-.623-.084-1.166-.253-1.63a3.263 3.263 0 00-.701-1.162 2.896 2.896 0 00-1.064-.703 3.697 3.697 0 00-1.337-.237c-.52 0-1.005.088-1.454.265a3.465 3.465 0 00-1.163.747 3.453 3.453 0 00-.774 1.162c-.188.454-.282.96-.282 1.515 0 .564.094 1.069.282 1.513.188.445.448.821.78 1.127.333.307.726.543 1.18.711.477.172.981.257 1.489.251 1.301 0 2.295-.46 2.979-1.378l-1.158-.918a2.044 2.044 0 01-.737.652c-.298.158-.665.237-1.098.237-.251 0-.492-.042-.724-.129a2.215 2.215 0 01-.622-.351 1.695 1.695 0 01-.636-1.213h5.279c.01-.077.014-.153.014-.23v-.23zm-1.736-.776H11.61c.039-.487.239-.887.6-1.198.362-.31.802-.467 1.324-.467.279 0 .522.045.73.137.207.091.378.213.513.366s.234.33.296.53a2.1 2.1 0 01.094.632z",
    fill: "white"
  }));
});
SvgEbst.displayName = "SvgEbst";
SvgEbst.defaultProps = {
  size: 24,
  color: "#1693D4"
};
exports["default"] = SvgEbst;