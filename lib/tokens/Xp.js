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
var SvgXp = React.forwardRef(function (props, ref) {
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
    d: "M11.092 17.25H9.744l-.812-3.188 1.984-1.036.646 1.845.48-2.434 2.637-1.377-.146.731 1.523.015c.588-.01 1.043-.208 1.367-.595.324-.388.478-.908.462-1.562a1.736 1.736 0 00-.027-.251l2.048-1.07c.283.52.391 1.135.325 1.84-.11 1.03-.555 1.853-1.334 2.47-.78.618-1.773.927-2.98.927l-1.73-.007-.732 3.692h-2.363zm.316-8.242h1.313l-2.023 2.868-4.995 2.611 1.851-2.617-1.779-5.12h2.61l.922 3.592.79-1.335h1.312-1.313l1.409-2.257h1.661l3.845.008c.873.024 1.59.255 2.15.695l-2.1 1.098a1.327 1.327 0 00-.157-.02l-1.72-.015-.225 1.133-2.638 1.378.399-2.02h-1.312zM4.34 16.463l3.995-2.089-1.761 2.875H3.75l.575-.814.014.028z",
    fill: "white"
  }));
});
SvgXp.displayName = "SvgXp";
SvgXp.defaultProps = {
  size: 24,
  color: "#008200"
};
exports["default"] = SvgXp;