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
var SvgChips = React.forwardRef(function (props, ref) {
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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.161 19.056l1.902-2.458c.712.111 1.413.048 2.083-.243.243-.105.46-.268.688-.406.032-.02.062-.045.087-.064l2.303 2.278c-.19.128-.38.266-.582.384-.78.453-1.641.75-2.534.878-.53.08-1.062.088-1.592.06a8.941 8.941 0 01-2.355-.429zm-.724-.282a7.484 7.484 0 01-.747-.386 6.714 6.714 0 01-2.783-3.112 7.481 7.481 0 01-.59-2.145A9.241 9.241 0 015.27 11.4c.093-1.481.543-2.842 1.452-4.04.838-1.106 1.939-1.862 3.242-2.348a7.246 7.246 0 011.923-.442c.498-.043 1-.086 1.497-.064.308.013.61.043.908.09l-1.929 2.8a3.967 3.967 0 00-1.807.613c-.998.633-1.595 1.545-1.875 2.67a5.43 5.43 0 00-.162 1.45c.006.257.028.508.066.753l-.23.335c-.187.27.042.627.373.584l.084-.01c.193.546.487 1.057.892 1.525.252.29.534.533.843.728l-1.083 2.618a.367.367 0 00-.027.113v-.001zm5.582-14.023c.668.177 1.3.467 1.872.855.103.07.198.154.297.231.018.015.038.027.062.044-.032.036-.05.06-.071.08-.683.674-1.368 1.346-2.05 2.021-.074.075-.121.087-.212.023a3.21 3.21 0 00-.901-.447l.962-2.531.026-.066a.366.366 0 00.015-.21zm-2.778 8.21l-3.565.466 5.931-8.612.033.015-2.291 6.023 4.181-.66-6.674 8.633-.032-.023 2.417-5.842z",
    fill: "white"
  }));
});
SvgChips.displayName = "SvgChips";
SvgChips.defaultProps = {
  size: 24,
  color: "#598182"
};
exports["default"] = SvgChips;