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
var SvgCs = React.forwardRef(function (props, ref) {
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
    d: "M12.698 7.219c1.84.135 2.732 1.234 2.732 1.432 0 .14-.033.447-.033.634 0 .125.045.325.135.6-.023.188-.146.282-.372.282-.338 0-.243-.379-.744-1.129-.54-.808-1.086-.977-1.72-1.012.012 1.722.06 6.462.063 8.092 1.691-.246 2.63-1.509 2.874-1.509.135 0 .305.105.305.353 0 .521-1.337 1.7-3.205 1.933-.139 1.522-.859 3.355-2.646 3.355-.845 0-1.555-.652-1.555-1.41 0-.494.372-.705.71-.705.338 0 .676.247.676.705 0 .305-.101.518-.304.634.203.142.405.212.608.212.677 0 1.186-1.224 1.273-2.797-1.972-.317-3.808-2.195-3.808-4.924 0-3.07 1.912-4.397 3.788-4.694.037-1.38.758-3.487 2.603-3.521 1.115 0 1.588.917 1.588 1.41 0 .494-.355.705-.71.705a.709.709 0 01-.71-.705c0-.282.113-.482.338-.6a.876.876 0 00-.608-.21c-.938 0-1.233 1.978-1.279 2.869h.001zm-1.19 8.84c-.003-1.825-.026-6.032-.032-7.964-1.731.425-2.3 2.484-2.3 3.87 0 2.196 1.037 3.704 2.332 4.095z",
    fill: "white"
  }));
});
SvgCs.displayName = "SvgCs";
SvgCs.defaultProps = {
  size: 24,
  color: "#262626"
};
exports["default"] = SvgCs;