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
var SvgTau = React.forwardRef(function (props, ref) {
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
    d: "M6.07 10.258l1.583 1.583H4.5l1.57-1.582zm1.583 1.913l-1.582 1.57-1.571-1.57h3.153zm2.139-2.14l-1.582 1.57V8.45l1.582 1.582zm-1.912 1.57l-1.57-1.57L7.88 8.45v3.153zm2.14-1.809l-1.57-1.57h3.152l-1.582 1.57zm0-3.482l1.582 1.582H8.45l1.57-1.582zm3.722-.228l-1.583 1.57V4.5l1.582 1.582zm-1.913 1.57l-1.57-1.57 1.57-1.582v3.152zM9.792 13.98L8.21 15.55v-3.152l1.582 1.582zm-3.482 0l1.57-1.582v3.152l-1.57-1.57zm7.659-4.188l-1.57-1.57h3.152l-1.582 1.57zm-1.57-1.9l1.57-1.583 1.582 1.582h-3.153zm-.796 8.228l-1.583 1.57-1.57-1.57h3.152zm-1.583-1.913l1.582 1.583H8.45l1.57-1.583zm7.671-4.176l-1.582 1.57V8.45l1.582 1.582zm-3.482 0l1.57-1.582v3.153l-1.57-1.57zm-3.95 7.898l1.57-1.581V19.5l-1.57-1.571zm1.9-1.581l1.583 1.582-1.583 1.57v-3.152zm1.81 1.342l-1.57-1.57h3.152l-1.582 1.57zm0-3.482l1.583 1.582h-3.154l1.572-1.582zm2.14-1.81l1.583 1.583-1.583 1.57v-3.153zm-1.9 1.583l1.57-1.583v3.152l-1.57-1.57zm3.71-.24l-1.57-1.57H19.5l-1.581 1.57zm0-3.482L19.5 11.84h-3.152l1.571-1.582z",
    fill: "white"
  }));
});
SvgTau.displayName = "SvgTau";
SvgTau.defaultProps = {
  size: 24,
  color: "#7B346E"
};
exports["default"] = SvgTau;