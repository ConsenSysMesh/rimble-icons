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
var SvgPpp = React.forwardRef(function (props, ref) {
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
    d: "M17.484 5.283a.997.997 0 010 1.385l-2.348 2.406a.969.969 0 01-.256.188.893.893 0 01-1.082-.158L11.46 6.708l-4.504 4.62 1.088 1.112a.878.878 0 01-.006 1.215.829.829 0 01-1.186.005l-1.73-1.765a.88.88 0 010-1.224l.012-.011a.14.14 0 00.011-.011l5.718-5.865.002-.001.018-.02A.86.86 0 0112 4.658a.923.923 0 01.15.125l2.238 2.29 1.745-1.79a.942.942 0 011.352 0h-.001zm1.393 6.827a.874.874 0 01.001 1.22l-.012.011a.15.15 0 00-.011.011l-5.74 5.886a.86.86 0 01-1.316-.091l-2.188-2.238-1.735 1.783a.94.94 0 01-.924.257.97.97 0 01-.678-.694.994.994 0 01.251-.947l2.347-2.405a.936.936 0 01.492-.272.899.899 0 01.84.252l2.344 2.399 4.496-4.608-1.088-1.113a.878.878 0 01.005-1.215.828.828 0 011.187-.005l1.705 1.744.001.001.003.002.02.022z",
    fill: "white"
  }));
});
SvgPpp.displayName = "SvgPpp";
SvgPpp.defaultProps = {
  size: 24,
  color: "#348F8D"
};
exports["default"] = SvgPpp;