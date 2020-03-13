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
var SvgMda = React.forwardRef(function (props, ref) {
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
    d: "M15.497 5.994c.912.975 1.378 2.199 1.378 3.63 0 1.453-.466 2.678-1.379 3.652a4.528 4.528 0 01-2.614 1.39v.85h2.067v.935h-2.088v.497h2.088v.871h-2.067V19.5h-1.764v-1.68H9.07v-.872h2.068v-.497H9.071v-.934h2.048v-.872a4.533 4.533 0 01-2.595-1.39c-.932-.975-1.399-2.2-1.399-3.651 0-1.473.446-2.697 1.379-3.652.931-.975 2.088-1.452 3.507-1.452 1.398 0 2.553.477 3.486 1.494zm-1.905 5.54c.384-.498.588-1.142.588-1.93 0-.768-.203-1.41-.629-1.909-.405-.518-.932-.767-1.54-.767-.629 0-1.155.249-1.561.747-.407.498-.61 1.12-.61 1.909 0 .808.204 1.452.61 1.95.405.497.932.746 1.56.746.65 0 1.196-.248 1.582-.746z",
    fill: "white"
  }));
});
SvgMda.displayName = "SvgMda";
SvgMda.defaultProps = {
  size: 24,
  color: "#01A64F"
};
exports["default"] = SvgMda;