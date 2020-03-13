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
var SvgBch = React.forwardRef(function (props, ref) {
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
    d: "M15.905 7.9c-.582-1.478-2.041-1.612-3.74-1.282l-.606-2.11-1.284.369.59 2.054c-.338.096-.681.203-1.023.308L9.25 5.17l-1.284.368.604 2.11c-.276.085-.547.17-.814.246l-.002-.008-1.771.508.393 1.373s.944-.291.933-.269c.52-.15.776.104.9.351l.69 2.403c.035-.01.082-.022.138-.03l-.136.039.965 3.368c.024.17.003.458-.36.563.02.01-.934.267-.934.267l.185 1.608 1.671-.48c.311-.088.619-.17.92-.255l.612 2.133 1.283-.367-.606-2.111c.345-.091.688-.186 1.03-.285l.601 2.102 1.285-.368-.61-2.13c2.123-.744 3.478-1.72 3.084-3.803-.317-1.675-1.293-2.184-2.603-2.127.636-.592.91-1.393.481-2.475zm-.487 5.078c.457 1.595-2.325 2.197-3.195 2.447l-.811-2.827c.87-.25 3.528-1.283 4.005.38zm-1.742-3.817c.416 1.45-1.91 1.934-2.635 2.142l-.735-2.564c.724-.208 2.936-1.091 3.37.422z",
    fill: "white"
  }));
});
SvgBch.displayName = "SvgBch";
SvgBch.defaultProps = {
  size: 24,
  color: "#8DC351"
};
exports["default"] = SvgBch;