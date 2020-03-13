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
var SvgMds = React.forwardRef(function (props, ref) {
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
    d: "M10.665 11.692a1.13 1.13 0 110-2.26 1.13 1.13 0 010 2.26zm2.774 0a1.13 1.13 0 110-2.26 1.13 1.13 0 010 2.26zm-2.775 2.774a1.13 1.13 0 110-2.26 1.13 1.13 0 010 2.26zm2.774 0a1.13 1.13 0 110-2.26 1.13 1.13 0 010 2.26zm2.774-3.082a.823.823 0 110-1.646.823.823 0 010 1.646zm0 2.774a.822.822 0 110-1.644.822.822 0 010 1.644zm-8.424-2.774a.822.822 0 110-1.644.822.822 0 010 1.643zm0 2.774a.822.822 0 110-1.645.822.822 0 010 1.645zm2.876 2.773a.82.82 0 110-1.643.822.822 0 010 1.643zm2.774 0a.82.82 0 01-.597-1.411.82.82 0 11.598 1.411zM10.665 8.61a.822.822 0 11-.05-1.644.822.822 0 01.05 1.644zm2.774 0a.822.822 0 11-.05-1.643.822.822 0 01.05 1.643zm-2.774-3.083a.514.514 0 110-1.026.514.514 0 110 1.027zm2.774 0a.513.513 0 110-1.026.514.514 0 010 1.027zm5.548 5.549a.513.513 0 110-1.027.513.513 0 010 1.027zm0 2.774a.514.514 0 110-1.027.514.514 0 010 1.027zM5.014 11.076a.514.514 0 110-1.027.514.514 0 010 1.027zm0 2.774a.514.514 0 110-1.028.514.514 0 010 1.028zm5.65 5.65a.513.513 0 110-1.027.513.513 0 010 1.027zm2.774 0a.514.514 0 110-1.027.514.514 0 010 1.027z",
    fill: "white"
  }));
});
SvgMds.displayName = "SvgMds";
SvgMds.defaultProps = {
  size: 24,
  color: "#1E252C"
};
exports["default"] = SvgMds;