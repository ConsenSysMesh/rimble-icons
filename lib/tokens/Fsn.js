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
var SvgFsn = React.forwardRef(function (props, ref) {
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
    d: "M19.5 9.159c-.756-.79-2.311-1.452-5.21-1.858a44.937 44.937 0 00-2.753-.299c-.715-.043-1.409-.086-2.08-.086-1.114 1.665-2.165 3.673-3.09 6.086-1.009 2.647-1.912 5.253-2.542 7.623h-.189c.063-2.541.483-5.423 1.345-8.413.568-1.942 1.24-3.652 1.997-5.146C3.573 7.43 1.135 8.476 0 9.97.968 7.6 3.846 5.593 8.238 4.888c2.333-3.48 5.085-5.04 7.376-4.356.798.235 1.47.747 2.017 1.473-.064-.042-.127-.085-.21-.106-1.681-.683-3.95.298-6.157 2.733h.105c4.938-.021 7.438 2.071 8.132 4.527zm-6.178 3.202c1.345 0 2.438 1.132 2.438 2.52 0 1.388-1.093 2.52-2.438 2.52-1.344 0-2.437-1.132-2.437-2.52 0-1.409 1.093-2.52 2.438-2.52z",
    fill: "white"
  }));
});
SvgFsn.displayName = "SvgFsn";
SvgFsn.defaultProps = {
  size: 24,
  color: "#1D9AD7"
};
exports["default"] = SvgFsn;