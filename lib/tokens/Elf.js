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
var SvgElf = React.forwardRef(function (props, ref) {
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
    d: "M19.5 11.972c0 1.752-1.358 3.118-3.091 3.113-1.698-.006-3.077-1.41-3.068-3.125.009-1.714 1.402-3.112 3.092-3.101 1.724.011 3.068 1.376 3.067 3.113zM6.817 17.94a2.265 2.265 0 01-2.265-2.29c.004-1.28 1.004-2.314 2.262-2.285.361.008.724.143 1.077.253.5.157.99.351 1.49.515.309.102.605.03.879-.14.398-.247.735-.546.95-.984a.873.873 0 011.153-.422c.408.176.62.62.503 1.053-.133.485-.533.746-1.031.659-.442-.077-.88-.22-1.328-.057-.803.291-1.155.956-1.42 1.714-.143.415-.296.85-.554 1.193-.414.552-1.023.794-1.715.791zM6.77 6.061c1.026 0 1.825.6 2.172 1.588.138.39.345.756.522 1.131.438.93 1.535 1.022 2.231.768.616-.226 1.21.17 1.225.81.01.442-.218.764-.633.895a.906.906 0 01-1.007-.377c-.08-.12-.155-.244-.244-.357-.612-.773-1.292-.975-2.213-.629-.32.12-.621.3-.923.467A2.262 2.262 0 014.723 9.34c-.716-1.523.378-3.278 2.046-3.278zm7.148 11.931c-.009.84-.694 1.523-1.511 1.508-.79-.015-1.45-.695-1.47-1.46-.022-.866.614-1.57 1.498-1.578.846-.009 1.493.689 1.484 1.53h-.001zM10.945 6.015c0-.849.665-1.522 1.497-1.515.808.008 1.485.7 1.478 1.513-.006.856-.646 1.543-1.49 1.527-.959-.018-1.524-.792-1.485-1.525z",
    fill: "white"
  }));
});
SvgElf.displayName = "SvgElf";
SvgElf.defaultProps = {
  size: 24,
  color: "#2B5EBB"
};
exports["default"] = SvgElf;