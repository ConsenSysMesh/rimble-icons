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
var SvgItc = React.forwardRef(function (props, ref) {
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
    d: "M18.186 14.512c.337.13.561.451.564.81a.863.863 0 01-.426.745.877.877 0 01-.863.015L12.94 18.55a.87.87 0 01-.851.95.87.87 0 01-.891-.848L8.992 17.39h-.05v-.027l-2.324-1.328a.865.865 0 01-.494.153.87.87 0 01-.865-.745.866.866 0 01.624-.953V9.528a.868.868 0 01-.63-.76.865.865 0 01.493-.853.877.877 0 01.98.155l4.478-2.565a.87.87 0 01.862-1.005.87.87 0 01.853 1.05l4.37 2.503a.867.867 0 01.585-.223.865.865 0 01.312 1.675v5.008zm-3.088-1.953v4.262l2.004-1.093a.87.87 0 01.597-1.255V9.545a.87.87 0 01-.668-1.086l-1.9-1.089v3.963h-.003l-.007.26-.107.05-.685.41.654.39.105.049.003.046.004.02h.002zm-3.03-6.327a.874.874 0 01-.652-.29L9.428 7.08v4.209l.816.486 1.03-.606a.77.77 0 111.522-.03l1.064.633.789-.473V7.094l-1.96-1.123a.869.869 0 01-.621.26zm.51 6.316l.812-.489-.816-.486a.776.776 0 01-1.064.017l-.802.466.799.476a.776.776 0 011.07.016zm-5.647 3.11l2.01 1.153v-4.12l.004-.132.034-.034.168-.1.624-.366-.564-.333-.262-.133v-.16h-.003V7.357l-1.97 1.13c.115.45-.15.91-.6 1.038v4.968a.873.873 0 01.541.458c.108.223.114.48.018.707zm5.137 2.095c.273 0 .53.128.694.347l1.852-1.013v-4.302l-.754-.45-1.065.64a.769.769 0 01-1.087.807.768.768 0 01-.433-.83l-1.044-.62-.806.47v4.285l1.894 1.085a.87.87 0 01.748-.419z",
    fill: "white"
  }));
});
SvgItc.displayName = "SvgItc";
SvgItc.defaultProps = {
  size: 24,
  color: "#102044"
};
exports["default"] = SvgItc;