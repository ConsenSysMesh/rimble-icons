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
var SvgSan = React.forwardRef(function (props, ref) {
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
    d: "M20.25 12.03c-.035 4.58-3.748 8.254-8.308 8.22-4.564-.035-8.229-3.764-8.192-8.335.038-4.527 3.76-8.195 8.287-8.165 4.56.03 8.246 3.747 8.213 8.28zm-15.903-.027c.008 4.215 3.418 7.618 7.642 7.628 4.227.007 7.677-3.419 7.662-7.639-.015-4.395-3.656-7.71-7.846-7.638-4.051.07-7.466 3.513-7.458 7.649zm9.664-3.582l-.305.977c-.569-.094-1.095-.206-1.629-.258-.316-.031-.645.051-.767.407-.126.366-.141.755.161 1.037.31.289.675.518 1.016.774.313.236.657.441.93.716.74.747.871 1.653.568 2.63-.18.579-.61.945-1.159 1.167-.84.34-2.27.172-3.073-.368l.352-1.023c.512.135.98.297 1.461.374.46.073.94.002 1.176-.467.237-.472.162-.97-.21-1.349-.286-.293-.645-.515-.98-.759-.224-.162-.474-.29-.691-.459a2.353 2.353 0 01-.716-2.835 1.558 1.558 0 011.102-.923c.941-.224 1.854-.122 2.764.36V8.42zm-6.06 3.443a.953.953 0 01-.943.952.976.976 0 01-.962-.978.971.971 0 01.971-.933.945.945 0 01.934.959zm9.07-.933c.523 0 .913.386.92.912a.953.953 0 01-.957.973.954.954 0 01-.94-.959c0-.548.398-.926.976-.926z",
    fill: "white"
  }));
});
SvgSan.displayName = "SvgSan";
SvgSan.defaultProps = {
  size: 24,
  color: "#2B77B3"
};
exports["default"] = SvgSan;