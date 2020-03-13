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
var SvgAbt = React.forwardRef(function (props, ref) {
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
    d: "M4.875 7.865L12 3.75l7.125 4.115v8.27L12 20.25l-7.125-4.115v-8.27zm.684 7.478l2.857-1.654 1.45-2.539L5.56 8.658v6.685zm.343.593l5.776 3.337V16.08L8.65 14.345l-2.748 1.59v.001zM18.44 8.681l-4.269 2.47 1.449 2.537 2.82 1.631V8.681zm-.322-.606l-5.757-3.324v3.231l1.47 2.574 4.287-2.48zm-4.536 3.417l-.879.508 1.744 1.009-.865-1.518zm-.34-.596l-.88-1.545v2.055l.88-.51zm-3.648 2.111L11.335 12l-.876-.507-.863 1.514zm-.259.942l2.342 1.341v-2.696l-2.342 1.355zM5.901 8.064l4.305 2.49 1.472-2.576v-3.25L5.901 8.063zm12.218 7.86l-2.727-1.577-3.03 1.755v3.148l5.757-3.325zm-3.412-1.973l-2.345-1.357v2.716l2.345-1.36zm-3.909-3.053l.88.508V9.355l-.88 1.543z",
    fill: "white"
  }));
});
SvgAbt.displayName = "SvgAbt";
SvgAbt.defaultProps = {
  size: 24,
  color: "#3EFFFF"
};
exports["default"] = SvgAbt;