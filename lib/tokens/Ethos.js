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
var SvgEthos = React.forwardRef(function (props, ref) {
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
    d: "M8.153 8.178a1.28 1.28 0 00-.145 1.611 1.27 1.27 0 001.065.567 1.641 1.641 0 11-.001 3.283 4.564 4.564 0 01-3.208-7.814A4.563 4.563 0 0112 5.57a4.564 4.564 0 00-1.636 3.504 1.64 1.64 0 001.63 1.642 1.641 1.641 0 01-1.64-1.642 1.267 1.267 0 00-.218-.716 1.295 1.295 0 00-.565-.466 1.292 1.292 0 00-.998 0c-.158.067-.3.164-.42.287zm10.98 4.971a4.57 4.57 0 01-3.266 6.247 4.563 4.563 0 01-5.503-4.47 1.642 1.642 0 113.281 0 1.276 1.276 0 00.784 1.183 1.29 1.29 0 001.006-.004c.307-.132.55-.38.679-.688a1.287 1.287 0 00-1.186-1.773 1.641 1.641 0 110-3.283 4.562 4.562 0 014.204 2.788h.001z",
    fill: "white"
  }), React.createElement("path", {
    opacity: 0.7,
    d: "M11.996 13.286c.906 0 1.64.735 1.64 1.64a4.563 4.563 0 01-9.053.83 4.565 4.565 0 014.49-5.395 1.641 1.641 0 010 3.283c-.256 0-.505.075-.716.218a1.283 1.283 0 00-.207 1.955v.001a1.28 1.28 0 002.055-.288c.099-.186.15-.394.149-.604 0-.905.735-1.64 1.642-1.64zm6.994-6.297a4.568 4.568 0 01-4.062 6.65 1.641 1.641 0 110-3.283 1.283 1.283 0 10-1.283-1.282 1.64 1.64 0 01-2.813 1.183 1.641 1.641 0 01-.468-1.183 4.565 4.565 0 017.287-3.665l.003.002c.56.418 1.017.957 1.335 1.578h.001z",
    fill: "white"
  }));
});
SvgEthos.displayName = "SvgEthos";
SvgEthos.defaultProps = {
  size: 24,
  color: "#00FFBA"
};
exports["default"] = SvgEthos;