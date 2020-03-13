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
var SvgUnity = React.forwardRef(function (props, ref) {
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
    d: "M9.966 17.049h.003c.892-.108 1.642-.378 2.25-.81.806-.578 1.208-1.311 1.208-2.2 0-.75-.294-1.378-.883-1.892-.59-.512-1.39-.824-2.399-.931a23.11 23.11 0 00-1.453-.113c-1.36-.082-2.243-.268-2.652-.56a1.305 1.305 0 01-.36-.392.927.927 0 01-.117-.457c0-.421.243-.777.732-1.056.49-.28 1.107-.422 1.859-.422.712 0 1.417.122 2.085.36 2.87 1.023 5.61 4.6 7.435 7.16-1.488.904-3.513 1.46-5.745 1.46-.657 0-1.313-.048-1.963-.147zm-3.21-1.457c-2.619-.956-3.766-3.319-2.472-5.614.036.322.155.632.347.9.24.337.593.61 1.055.826 1.617.702 4.589.253 5.813 1.145.412.3.618.683.618 1.15 0 .588-.287 1.069-.862 1.442-.574.373-1.32.56-2.24.56a6.644 6.644 0 01-2.258-.409z",
    fill: "white"
  }), React.createElement("path", {
    opacity: 0.5,
    d: "M19.434 14.156v-4.39c.493.666.768 1.411.768 2.195 0 .784-.275 1.528-.768 2.195zm-1.237-5.595l.004 5.596c-1.757-2.495-4.383-5.633-7.61-6.682a7.962 7.962 0 00-1.72-.358c1-.246 2.027-.37 3.058-.367 2.505 0 4.751.702 6.268 1.811z",
    fill: "white"
  }));
});
SvgUnity.displayName = "SvgUnity";
SvgUnity.defaultProps = {
  size: 24,
  color: "#F58634"
};
exports["default"] = SvgUnity;