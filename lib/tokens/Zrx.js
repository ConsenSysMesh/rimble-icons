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
var SvgZrx = React.forwardRef(function (props, ref) {
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
    d: "M11.597 20.8c-.216-.023-.432-.042-.649-.068a8.705 8.705 0 01-3.297-1.09c-.015-.008-.029-.021-.058-.041l5.287-3.952.533.517c.296.29.593.576.883.87.072.072.125.072.209.028a5.72 5.72 0 002.182-1.912l.086-.126c.025.029.048.052.067.078.613.817 1.227 1.635 1.843 2.45.053.07.047.112-.01.175-1.427 1.622-3.2 2.62-5.336 2.961-.269.044-.542.06-.813.09-.036.003-.072.013-.107.02h-.82zm.776-17.6l.447.045c1.261.12 2.441.494 3.539 1.12.016.01.03.02.056.04L11.041 8.26c-.072-.068-.14-.131-.208-.197-.378-.368-.758-.735-1.133-1.107-.06-.06-.105-.066-.18-.028a5.717 5.717 0 00-2.216 1.94l-.08.12-1.975-2.63c.2-.212.383-.422.583-.617a8.727 8.727 0 014.627-2.396c.343-.062.694-.083 1.042-.124.04-.004.079-.014.117-.02h.755zM4.366 7.628l3.996 5.238-.806.827c-.2.205-.4.414-.605.616-.058.057-.06.102-.025.172a5.708 5.708 0 002.021 2.273c.005.002.008.01.021.037L6.36 18.75c-1.56-1.344-2.573-3-2.978-5.007-.435-2.148-.083-4.179.985-6.114zm11.34 3.495l.736-.762c.203-.213.404-.428.614-.636.066-.064.066-.113.027-.19a5.71 5.71 0 00-1.96-2.238l-.109-.077 2.624-1.968c1.485 1.272 2.472 2.84 2.925 4.731.565 2.362.061 4.698-.918 6.342l-3.938-5.202z",
    fill: "white"
  }));
});
SvgZrx.displayName = "SvgZrx";
SvgZrx.defaultProps = {
  size: 24,
  color: "#2D2D31"
};
exports["default"] = SvgZrx;