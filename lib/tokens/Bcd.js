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
var SvgBcd = React.forwardRef(function (props, ref) {
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
    d: "M16.939 7.27l.058.129-2.291 1.051 1.03 3.413 3.391-1.713.045.09.014-.017-2.197-2.93-.05-.022zm-.124-.057l-2.08-.968H9.357l-2.221 1.02 2.31.972h5.137l2.232-1.024zm-9.866.24l-2.08 2.7 3.386 1.71L9.29 8.439l-2.34-.985zm2.58 1.03l-1.068 3.54 3.534 6.248 3.536-6.248-1.07-3.54H9.53zm9.384 2.05L15.75 12.13l-3.154 5.574 6.317-7.173zm-7.535 7.142L8.242 12.13l-3.147-1.589 6.283 7.134zm-6.555-7.443l.025-.05-.032.042.007.008zm2.093-3.135L9.305 6h5.484l2.358 1.096 2.354 3.14L12 18.75l-7.5-8.515 2.417-3.138zm6.901 4.029c.044.455-.144.729-.445.884.495.12.806.418.745 1.087-.076.83-.687 1.052-1.56 1.103v.872h-.519v-.86c-.135 0-.272-.002-.415-.005v.865h-.518v-.874c-.121-.001-.245-.004-.371-.004h-.675l.103-.627s.384.006.377 0c.147 0 .186-.107.195-.174v-1.378h.056a.412.412 0 00-.056-.004v-.983c-.02-.107-.088-.23-.299-.231.007-.008-.376 0-.376 0v-.561h.716v.003c.107 0 .217-.002.33-.005v-.863h.52v.847c.137-.003.277-.006.413-.006v-.84h.52v.863c.67.06 1.2.268 1.26.89zm-.726 1.867c0-.681-1.103-.578-1.455-.578v1.157c.352 0 1.455.074 1.455-.579zm-.241-1.633c0-.62-.921-.525-1.214-.525v1.05c.293 0 1.214.07 1.214-.525z",
    fill: "white"
  }));
});
SvgBcd.displayName = "SvgBcd";
SvgBcd.defaultProps = {
  size: 24,
  color: "#FCC339"
};
exports["default"] = SvgBcd;