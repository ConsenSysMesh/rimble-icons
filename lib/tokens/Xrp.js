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
var SvgXrp = React.forwardRef(function (props, ref) {
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
    d: "M16.47 13.654c-.517-.306-1.1-.395-1.678-.416-.484-.017-1.207-.335-1.207-1.237a1.24 1.24 0 011.207-1.24c.578-.02 1.161-.109 1.679-.415 1.285-.76 1.852-2.355 1.345-3.784-.508-1.429-1.944-2.278-3.405-2.014-1.462.264-2.528 1.565-2.528 3.086 0 .606.212 1.165.48 1.683.226.435.34 1.245-.435 1.703-.578.341-1.298.125-1.658-.464-.303-.498-.67-.965-1.183-1.269a3.008 3.008 0 00-3.872.7 3.191 3.191 0 000 4.027 3.007 3.007 0 003.872.699c.514-.303.88-.77 1.184-1.268.25-.409.872-.93 1.657-.465.576.341.754 1.088.435 1.704-.27.517-.48 1.076-.48 1.683 0 1.52 1.066 2.821 2.528 3.085 1.461.264 2.897-.585 3.405-2.014.507-1.428-.06-3.024-1.345-3.784h-.001z",
    fill: "white"
  }));
});
SvgXrp.displayName = "SvgXrp";
SvgXrp.defaultProps = {
  size: 24,
  color: "#00AAE4"
};
exports["default"] = SvgXrp;