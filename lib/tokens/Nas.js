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
var SvgNas = React.forwardRef(function (props, ref) {
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
    d: "M9.547 13.991l2.36 4.787 1.212-3.58-3.57-1.207h-.002zm-4.314-2.076l3.573 1.212 1.213-3.577-4.786 2.364zm4.523 1.518c.056.03.08.047.106.056 1.152.392 2.302.786 3.457 1.168.094.03.227.005.32-.04 1.32-.645 2.637-1.296 3.954-1.947.375-.185.749-.372 1.158-.576-.09-.035-.137-.054-.186-.07-1.115-.38-2.23-.76-3.349-1.129a.523.523 0 00-.358.023c-1.404.682-2.803 1.376-4.202 2.067l-.9.447zm4.874-3.05c-.847-1.72-1.684-3.415-2.542-5.155l-2.61 7.7 5.152-2.544zM3.75 12.003c.82-.406 1.595-.792 2.37-1.174 1.319-.65 2.637-1.301 3.958-1.947a.49.49 0 00.273-.31c.516-1.54 1.04-3.077 1.561-4.615.02-.057.043-.112.079-.206.053.102.091.174.127.247 1.01 2.047 2.016 4.095 3.034 6.138.049.099.18.181.291.22 1.527.526 3.057 1.043 4.586 1.563l.221.078c-.141.072-.245.126-.35.178-1.971.973-3.941 1.948-5.915 2.914a.66.66 0 00-.37.424c-.51 1.525-1.031 3.046-1.55 4.569-.014.041-.031.082-.065.169-.133-.266-.248-.494-.36-.721-.918-1.862-1.837-3.723-2.75-5.588a.538.538 0 00-.34-.304c-1.532-.512-3.06-1.035-4.59-1.555-.055-.019-.11-.042-.21-.08",
    fill: "white"
  }));
});
SvgNas.displayName = "SvgNas";
SvgNas.defaultProps = {
  size: 24,
  color: "#222222"
};
exports["default"] = SvgNas;