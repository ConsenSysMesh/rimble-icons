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
var SvgSky = React.forwardRef(function (props, ref) {
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
    d: "M18.02 9.602l-3.609 8.023H12.97l3.799-8.445c.438.071.86.214 1.252.422zM11.705 4.89L6.153 17.233c-1.416-.672-2.403-2.144-2.403-3.858 0-2.348 1.846-4.25 4.125-4.25 0-2.246 1.69-4.08 3.83-4.236zm4.42 4.236l-3.823 8.5h-1.563l4.802-10.672c.37.635.585 1.376.585 2.172zm1.421 8.237l2.45-5.442c.162.456.254.945.254 1.457 0 1.829-1.125 3.386-2.704 3.985zm1.082-7.36c.342.27.645.59.89.958l-2.99 6.644a3.751 3.751 0 01-.402.021h-.927l3.429-7.624zm-6.613-5.127c.585.002 1.14.13 1.643.36l-5.573 12.39h-.21a3.97 3.97 0 01-1.468-.283l5.608-12.467zm3.2 1.588l-5.021 11.162H8.509l5.496-12.214c.466.269.877.627 1.21 1.053z",
    fill: "white"
  }));
});
SvgSky.displayName = "SvgSky";
SvgSky.defaultProps = {
  size: 24,
  color: "#0072FF"
};
exports["default"] = SvgSky;