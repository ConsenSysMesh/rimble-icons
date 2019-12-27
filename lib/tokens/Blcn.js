"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgBlcn = function SvgBlcn(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.925 5.25h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm7.5 0h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm0 7.5h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675zm-7.5 0h4.65a.675.675 0 01.675.675v4.65a.675.675 0 01-.675.675h-4.65a.675.675 0 01-.675-.675v-4.65a.675.675 0 01.675-.675z",
    fill: "white"
  }));
};

SvgBlcn.displayName = "SvgBlcn";
SvgBlcn.defaultProps = {
  size: 24,
  color: "#2AABE4"
};
exports["default"] = SvgBlcn;