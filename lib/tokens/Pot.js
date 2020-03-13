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
var SvgPot = React.forwardRef(function (props, ref) {
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
    d: "M9.025 13.635l-.293 1.49-.532 2.738c-.015.083-.036.139-.141.137-.662-.01-1.323-.015-1.985-.023-.015 0-.032-.01-.074-.026l1.492-7.455H6.236c.003-.055.001-.088.007-.12.077-.403.16-.805.23-1.209.02-.112.07-.14.175-.14.308.003.615-.008.921.002.147.005.203-.037.231-.181.171-.891.354-1.78.53-2.669.02-.106.044-.178.182-.178 1.506.004 3.013-.01 4.519.01.879.01 1.76.056 2.625.233.298.062.6.141.876.264.793.353 1.271.963 1.404 1.809.206 1.313-.072 2.52-.915 3.571-.623.774-1.476 1.209-2.43 1.473-.755.209-1.531.274-2.313.275-1.016.003-2.032 0-3.048 0h-.204v-.001zm.416-2.053h.212c1.075 0 2.15.002 3.225-.002.229 0 .46-.01.688-.037.868-.104 1.527-.52 1.948-1.275.181-.328.242-.708.172-1.076-.088-.523-.4-.864-.93-.96a7.37 7.37 0 00-1.177-.128c-1.104-.02-2.208-.012-3.313-.015-.04 0-.08.006-.133.011l-.183.936h3.068l-.282 1.454H9.658l-.217 1.091z",
    fill: "white"
  }));
});
SvgPot.displayName = "SvgPot";
SvgPot.defaultProps = {
  size: 24,
  color: "#105B2F"
};
exports["default"] = SvgPot;