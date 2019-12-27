"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = (0, _styledComponents2.default)("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgLbc = function SvgLbc(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      fill: "currentcolor",
      height: props.size,
      width: props.size
    }),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M18.132 12.888l-.598-.15.182-.727 1.863.466-.465 1.864-.728-.182.162-.646-6.654 4.12-7.38-3.688v-2.813l7.668-4.796 7.031 3.43v1.158l-7.319 4.547-5.435-2.695.333-.672 5.062 2.51 6.61-4.107v-.272l-6.237-3.042-6.962 4.354v1.935l6.59 3.293 6.277-3.887z",
      fill: "white"
    })
  );
};

SvgLbc.displayName = "SvgLbc";
SvgLbc.defaultProps = {
  size: 24,
  color: "#006149"
};
exports.default = SvgLbc;