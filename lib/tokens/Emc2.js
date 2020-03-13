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
var SvgEmc2 = React.forwardRef(function (props, ref) {
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
    d: "M5.92 14.37h3.298l-1.42 2.88H4.5l1.42-2.88zm1.88-3.81h3.298l-1.416 2.872h-3.3L7.8 10.56zm1.879-3.81h3.298L11.56 9.624H8.263L9.679 6.75z",
    fill: "white",
    fillOpacity: 0.4
  }), React.createElement("path", {
    d: "M9.208 14.37h3.298l-1.42 2.879H7.787l1.42-2.88v.001zm1.88-3.81h3.297l-1.416 2.871H9.671l1.416-2.871zm1.878-3.81h3.299l-1.417 2.872H11.55l1.416-2.872z",
    fill: "white",
    fillOpacity: 0.6
  }), React.createElement("path", {
    d: "M12.443 14.37h3.298l-1.42 2.879h-3.298l1.42-2.88v.001zm1.879-3.81h3.299l-1.416 2.871h-3.299l1.416-2.871zm1.88-3.81H19.5l-1.417 2.872h-3.297L16.2 6.75z",
    fill: "white"
  }));
});
SvgEmc2.displayName = "SvgEmc2";
SvgEmc2.defaultProps = {
  size: 24,
  color: "#00CCFF"
};
exports["default"] = SvgEmc2;