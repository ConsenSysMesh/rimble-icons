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
var SvgXmy = React.forwardRef(function (props, ref) {
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
    d: "M15.787 15.75c-.451 0-.947-.227-.947-.909 0-.336.263-1.369.786-3.099.107-.267.16-.507.16-.72 0-.408-.314-.817-.9-.817-.341 0-1.083.135-1.308.863-.15.485-.496 1.773-1.037 3.864-.21.545-.586.818-1.127.818-.811 0-.947-.591-.947-.955 0-.144.216-1.014.649-2.61.168-.532.252-.92.252-1.162 0-.364-.27-.818-.901-.818-.63 0-1.217.454-1.487 1.454-.18.667-.436 1.667-.767 3-.18.727-.586 1.091-1.217 1.091-.571 0-.871-.318-.901-.955l1.036-4.318H4.832a1.067 1.067 0 01-1.026-1.472A1.069 1.069 0 014.81 8.34h3.854c.54 0 .872.258.992.772.541-.68 1.262-.863 1.894-.863.632 0 1.442.364 1.803 1.182.495-.546 1.352-1.182 2.57-1.182 1.126 0 2.073.773 2.073 2.136 0 .515-.255 1.591-.766 3.228l1.977-.014c.579 0 1.043.482 1.043 1.075s-.464 1.075-1.037 1.075h-3.426z",
    fill: "white"
  }));
});
SvgXmy.displayName = "SvgXmy";
SvgXmy.defaultProps = {
  size: 24,
  color: "#EC1076"
};
exports["default"] = SvgXmy;