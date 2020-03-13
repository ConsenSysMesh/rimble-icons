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
var SvgAnt = React.forwardRef(function (props, ref) {
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
    d: "M5.974 13.198a3.96 3.96 0 01-.008-.237c0-2.638 2.057-4.782 4.63-4.874.06 0 .127 0 .188.005l-.613-.61s2.47-.412 5.64 1.495c0 0 .047.096 0 .38 0 0 1.494.641 1.622 1.886.128 1.245-.665 1.957-1.304 2.058 0 0 .332-.513-.179-.787a.684.684 0 00-.364-.081c-.976 0-1.088 1.107-1.088 1.107-.011.056-.011.112-.011.168 0 0-.143 1.409 2.191 1.575.534-.688 1.001-1.425 1.396-2.2a16.344 16.344 0 001.39-3.86c-1.36-1.115-2.963-2.07-4.687-2.87-.647-.3-1.273-.56-1.866-.784a20.528 20.528 0 00-.915-.323c-.242.078-.548.185-.915.323-.593.223-1.22.484-1.866.784-1.723.799-3.327 1.755-4.686 2.87.073.354.185.796.345 1.31.286.919.654 1.811 1.1 2.665zM20.25 8.927l-.038.21c-.019.162-.152.746-.315 1.304a17.006 17.006 0 01-1.177 2.963c-.68 1.325-1.505 2.48-2.451 3.43a10.778 10.778 0 01-4.025 2.575l-.084.03-.16.061-.158-.055-.089-.031a10.737 10.737 0 01-4.024-2.575c-.951-.96-1.776-2.113-2.451-3.43A17.031 17.031 0 013.86 9.505a7.857 7.857 0 01-.071-.348l-.039-.216.09-.075.066-.056c1.383-1.164 3.019-2.162 4.785-3.002.994-.477 2.018-.89 3.065-1.235l.239-.074.163.049.08.026c.81.26 1.887.675 3.064 1.234 1.764.838 3.397 1.835 4.779 2.997l.169.12zm-5.701.543c.04-.02.174-.087.327-.244.307.04.609.137.609.137-.558-.335-1.32-.534-2.164-.529 0 0 .322.458 1.217.645l.01-.01z",
    fill: "white"
  }));
});
SvgAnt.displayName = "SvgAnt";
SvgAnt.defaultProps = {
  size: 24,
  color: "#2CD3E1"
};
exports["default"] = SvgAnt;