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
var SvgRlc = React.forwardRef(function (props, ref) {
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
    d: "M17.762 9.665c.043-.043.128-.043.211-.043 1.265 0 2.277 1.07 2.277 2.357 0 1.2-.885 2.143-2.023 2.357h-.254c-.421 0-.843-.129-1.223-.343a.705.705 0 00-.421-.129.839.839 0 00-.463.129c-.296.171-.422.471-.422.814v.386a2.31 2.31 0 01-2.024 2.1h-.253c-.421 0-.843-.128-1.223-.343a.95.95 0 00-.463-.128.843.843 0 00-.464.128c-.295.172-.422.472-.422.815v.385c-.084 1.115-.97 1.972-2.065 2.1h-.211c-1.265 0-2.277-1.072-2.277-2.357.042-1.2.885-2.186 2.024-2.315h.253c.421 0 .843.13 1.222.344.124.087.271.131.422.128a.839.839 0 00.464-.128c.295-.172.421-.472.421-.815-.084-1.242.802-2.357 2.024-2.485h.253c.421 0 .843.128 1.223.342a.953.953 0 00.464.129.84.84 0 00.463-.129c.295-.171.422-.471.422-.814-.084-1.243.843-2.357 2.065-2.486zm-4.847-2.958c.084-.042.127-.042.253-.042 1.265 0 2.277 1.07 2.277 2.357-.042 1.2-.885 2.185-2.024 2.313h-.253c-.422 0-.843-.128-1.223-.342a.705.705 0 00-.421-.129.839.839 0 00-.464.129c-.295.171-.422.471-.422.814v.386c-.084 1.114-.969 1.97-2.066 2.1h-.21c-1.265 0-2.277-1.071-2.277-2.357 0-1.157.843-2.1 1.981-2.271h.254c.421 0 .843.128 1.222.342.123.087.271.132.422.129a.839.839 0 00.463-.129c.296-.171.422-.471.422-.814-.084-1.243.844-2.357 2.066-2.486zM8.277 3.75c1.257 0 2.276 1.037 2.276 2.314 0 1.279-1.02 2.314-2.276 2.314C7.019 8.378 6 7.343 6 6.064 6 4.787 7.02 3.75 8.277 3.75z",
    fill: "white"
  }));
});
SvgRlc.displayName = "SvgRlc";
SvgRlc.defaultProps = {
  size: 24,
  color: "#FFD800"
};
exports["default"] = SvgRlc;