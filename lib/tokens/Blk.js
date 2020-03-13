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
var SvgBlk = React.forwardRef(function (props, ref) {
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
    d: "M17.325 8.348a2.853 2.853 0 01-1.827 2.798s.759-.75.724-2.672c-.036-1.922-1.448-2.872-1.448-2.872s2.516.56 2.55 2.745h.001zM8.952 18.614l-2.577.127v-.24s1.577-.164 1.577-2.993v-7.23c0-2.396-1.577-2.81-1.577-2.81V5.25l2.577.126v13.238zm4.119.135c-1.121.01-3.201-.147-3.201-.147V5.395c1.371-.019 1.85-.208 2.98-.045 1.13.162 2.1 1.29 2.365 2.42.265 1.128-.017 2.203-.38 2.79-.362.586-1.155.993-1.155.993s1.2.415 1.624.776c.423.362 1.245 1.346.927 3.486-.318 2.14-2.04 2.925-3.16 2.934zm2.978-.487s1.223-1.065 1.169-3.226c-.054-2.16-1.169-3.176-1.169-3.176s2.3.577 2.325 3.151c.027 2.573-2.325 3.252-2.325 3.252v-.001zm-2.325-7.75c.824-1.097.565-3.158-.433-3.863-.997-.705-2.047-.353-2.25-.154-.204.199-.194 4.823-.194 4.823s2.053.289 2.877-.807zm.152 1.968c-.77-.344-3.03-.254-3.03-.254s-.035 1.168.048 3.354c.082 2.185.812 2.173 1.571 2.203.759.03 2.207-.024 2.683-1.909.477-1.883-.5-3.051-1.271-3.394z",
    fill: "white"
  }));
});
SvgBlk.displayName = "SvgBlk";
SvgBlk.defaultProps = {
  size: 24,
  color: "#181818"
};
exports["default"] = SvgBlk;