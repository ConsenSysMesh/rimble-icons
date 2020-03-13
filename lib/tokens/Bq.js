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
var SvgBq = React.forwardRef(function (props, ref) {
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
    d: "M7.471 12.716a2.887 2.887 0 002.902 2.886c1.592-.01 2.885-1.287 2.886-2.85a2.875 2.875 0 00-2.894-2.902c-1.599.002-2.894 1.284-2.894 2.866zm.003 3.104v.955H6V6c.42.008.773.157 1.058.454.272.285.407.626.406 1.022-.004.71-.002 1.42-.002 2.164 1.03-.86 2.177-1.284 3.513-1.08 1.324.203 2.34.869 3.033 2.008 1.046 1.722.707 3.92-.809 5.288-1.478 1.335-3.934 1.542-5.724-.036zm4.77.936c.058-.035.089-.056.121-.073a4.285 4.285 0 001.238-.916.396.396 0 01.285-.135c1.252-.072 2.381-1.08 2.593-2.313.28-1.62-.705-3.05-2.332-3.36a.962.962 0 01-.578-.315c-.3-.331-.664-.59-1.052-.813-.033-.018-.065-.039-.119-.072.739-.202 1.458-.25 2.187-.085.725.165 1.35.52 1.935 1.006v-.957H18V19.5a1.47 1.47 0 01-1.05-.451 1.425 1.425 0 01-.415-1.032v-2.153c-1.273 1.067-2.682 1.387-4.291.892z",
    fill: "white"
  }));
});
SvgBq.displayName = "SvgBq";
SvgBq.defaultProps = {
  size: 24,
  color: "#1D1D1D"
};
exports["default"] = SvgBq;