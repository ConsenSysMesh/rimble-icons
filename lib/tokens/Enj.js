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
var SvgEnj = React.forwardRef(function (props, ref) {
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
    d: "M16.735 6.75c.37.043.745.066 1.111.132.726.137.962.482.84 1.182-.05.284-.233.458-.524.505a3.84 3.84 0 01-.523.038c-2.38.005-4.765.01-7.145.02-.36 0-.716.032-1.066.09-1.181.184-1.625.652-1.724 1.79-.045.535-.045.535.514.535h9.77a.847.847 0 01.43.113c.436.265.327.68.302 1.064-.02.308-.212.477-.543.539-.139.02-.28.03-.42.028H8.014c-.36 0-.354 0-.325.34.025.313.045.62.124.922.147.563.508.912 1.091 1.068.646.175 1.313.213 1.98.218 2.325.014 4.646.01 6.972.01.296 0 .572.037.745.297.337.501.075 1.2-.513 1.38-.504.156-1.032.194-1.556.199-2.182.038-4.365.043-6.547 0a11.93 11.93 0 01-2.004-.222c-1.556-.308-2.331-1.064-2.593-2.558-.06-.345-.094-.694-.138-1.04v-2.727c.03-.27.054-.538.09-.803.206-1.693.997-2.524 2.735-2.893.617-.133 1.248-.161 1.87-.223 2.258-.004 4.522-.004 6.79-.004z",
    fill: "white"
  }));
});
SvgEnj.displayName = "SvgEnj";
SvgEnj.defaultProps = {
  size: 24,
  color: "#624DBF"
};
exports["default"] = SvgEnj;