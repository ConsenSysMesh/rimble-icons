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
var SvgOax = React.forwardRef(function (props, ref) {
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
    d: "M10.568 14.001l-.468.998H9.064L11.879 9l1.877 4h-1.062l-.84-1.736-.841 1.765-.445.972zm4.09.975l2.197-2.963-2.213-2.985h1.212l1.605 2.183-.584.803.584.802-1.605 2.182h-2.222l-.47-.997H14.2l.459.975zm3.394-2.975l-.593-.816 1.606-2.182h1.185l-2.198 2.998zm0 0l2.198 2.998h-1.185l-1.605-2.182.592-.816zM8.566 9.869a2.974 2.974 0 01.814 2.133c.01.788-.28 1.55-.814 2.131-.541.607-1.21.867-2 .867a2.681 2.681 0 01-2.002-.867 3 3 0 01-.814-2.131 2.973 2.973 0 01.518-1.737l.69.735a2.117 2.117 0 00.272 2.449 1.798 1.798 0 001.335.607c.504 0 .985-.22 1.335-.607.357-.373.555-.888.542-1.421 0-.531-.195-1.041-.543-1.422a1.75 1.75 0 00-1.335-.578 1.642 1.642 0 00-.937.263l-.69-.735a2.562 2.562 0 011.63-.552 2.632 2.632 0 011.999.865z",
    fill: "white"
  }));
});
SvgOax.displayName = "SvgOax";
SvgOax.defaultProps = {
  size: 24,
  color: "#164B79"
};
exports["default"] = SvgOax;