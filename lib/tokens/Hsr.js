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
var SvgHsr = React.forwardRef(function (props, ref) {
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
    d: "M8.063 5.625h3.265c-.393.622-.634 1.31-.619 2.055.972.01 1.946.01 2.918 0a3.434 3.434 0 00-.612-2.055h3.288c-.226.475-.61.915-.574 1.472-.015 2.493.005 4.988-.002 7.48.322 0 .648 0 .975.003.237-.473.449-.955.618-1.455.976.025 1.958-.028 2.93.103-.962.83-1.464 2.01-2.09 3.085-2.486.005-4.97-.008-7.458.007-.117.907.442 1.532 1.09 2.055H7.595c.365-.482 1.1-.793 1.023-1.5.025-2.41 0-4.822.008-7.235h2.13v1.485h2.826V9.422h-5.9L6.214 12c.488.86.977 1.719 1.469 2.578h.726v1.735H6.19C5.38 14.873 4.54 13.45 3.75 12v-.002c.793-1.448 1.635-2.87 2.44-4.31.829 0 1.656 0 2.483-.008a3.579 3.579 0 00-.611-2.055zm2.694 7.25v1.703h2.825v-1.703h-2.825zm5.186-5.188h2.212c.606.975 1.023 2.1 1.898 2.88.018.058.05.176.067.233-.934.123-1.88.028-2.823.075-.12-.52-.355-.998-.616-1.455l-.738.002V7.687zm-2.284 8.843c.653.002 1.31 0 1.963-.002-.014.835.57 1.352 1.143 1.847h-4.227c.542-.515 1.176-1.003 1.121-1.845z",
    fill: "white"
  }));
});
SvgHsr.displayName = "SvgHsr";
SvgHsr.defaultProps = {
  size: 24,
  color: "#56428E"
};
exports["default"] = SvgHsr;