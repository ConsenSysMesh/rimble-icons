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
var SvgCdn = React.forwardRef(function (props, ref) {
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
    d: "M12 4.5l-1.245 2.262c-.141.246-.394.224-.647.086l-.9-.455.67 3.475c.142.635-.311.635-.535.36L7.77 8.512l-.255.872c-.03.115-.159.235-.353.206l-1.988-.408.521 1.851c.113.412.2.582-.112.69l-.709.326 3.422 2.709a.43.43 0 01.156.454l-.3.958c1.18-.133 2.236-.332 3.415-.455.104-.01.278.157.277.275l-.155 3.51h.573l-.09-3.502c-.001-.118.157-.293.26-.282 1.18.123 2.236.322 3.414.454l-.3-.959a.43.43 0 01.157-.453l3.422-2.71-.709-.324c-.312-.109-.225-.279-.112-.69l.522-1.852-1.989.408c-.194.029-.323-.091-.352-.206l-.256-.872-1.572 1.716c-.224.275-.677.275-.535-.36l.671-3.475-.9.455c-.254.138-.507.16-.648-.086L12 4.5z",
    fill: "white"
  }));
});
SvgCdn.displayName = "SvgCdn";
SvgCdn.defaultProps = {
  size: 24,
  color: "#F70808"
};
exports["default"] = SvgCdn;