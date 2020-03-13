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
var SvgStrat = React.forwardRef(function (props, ref) {
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
    d: "M12.04 13.78l7.195-4.188-7.195-4.263-7.124 4.263 7.124 4.188zm-7.505-2.19a.57.57 0 00.282.492l7.22 4.206 7.34-4.34a.555.555 0 01.831.48v1.969a.558.558 0 01-.27.478l-7.618 4.547a.549.549 0 01-.56.002L3.945 14.83a.397.397 0 01.097-.724.392.392 0 01.298.04l7.697 4.525 7.386-4.408v-1.425l-7.105 4.202a.548.548 0 01-.556.002l-7.338-4.275a1.362 1.362 0 01-.674-1.177V9.735a.473.473 0 01.71-.411l.456.268-.573.343a.39.39 0 01-.588-.273.397.397 0 01.188-.407l7.814-4.677a.549.549 0 01.563-.001l7.658 4.537a.558.558 0 01-.004.96l-7.659 4.459a.55.55 0 01-.555-.001l-7.695-4.525a.312.312 0 00.471-.272v1.856-.001z",
    fill: "white"
  }));
});
SvgStrat.displayName = "SvgStrat";
SvgStrat.defaultProps = {
  size: 24,
  color: "#1387C9"
};
exports["default"] = SvgStrat;