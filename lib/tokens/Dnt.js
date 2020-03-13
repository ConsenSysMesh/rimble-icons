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
var SvgDnt = React.forwardRef(function (props, ref) {
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
    d: "M18.806 14.325c.395-.02.772-.172 1.069-.433-.413 2.112-1.568 4.19-3.55 5.333-1.517.883-3.413 1.177-5.256.952-.277-.796-1-1.645-2.258-2.285-1.982-1.021-2.913-2.788-3.758-1.922a.922.922 0 00-.19.26 3.263 3.263 0 01-.103-.243C3.14 11.97 4.76 7.935 8 5.044c1.93-1.715 4.188-1.524 6.205-.589a1.021 1.021 0 00-.38.814V9.32a4.076 4.076 0 00-5.208.944 4.124 4.124 0 00.078 5.316 4.076 4.076 0 005.234.788 1.048 1.048 0 002-.45V5.476c1.55 1.091 2.791 2.476 3.36 3.429.277.478.475.999.586 1.541-.244-.18-.528-.3-.827-.346-.638-.035-1.12.831-.793 2.077.276 1.127-.069 2.114.551 2.148zm-7.772.069c-2.172-1.246-.345-4.45 1.827-3.203.655.364.724 1.524.603 2.268-.224 1.282-1.43 1.507-2.43.935zm1.017-8.277c-.483.017-.827.606-.81.866.017.26.379.416.878.242.449-.156.863-.052.845-.312-.018-.259-.448-.813-.913-.796z",
    fill: "white"
  }));
});
SvgDnt.displayName = "SvgDnt";
SvgDnt.defaultProps = {
  size: 24,
  color: "#2C398F"
};
exports["default"] = SvgDnt;