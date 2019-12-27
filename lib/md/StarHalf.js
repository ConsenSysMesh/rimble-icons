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

var SvgStarHalf = function SvgStarHalf(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "starHalf_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "starHalf_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#starHalf_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      clipPath: "url(#starHalf_svg__b)",
      d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
    })
  );
};

SvgStarHalf.displayName = "SvgStarHalf";
SvgStarHalf.defaultProps = {
  size: 24,
  color: "inherit"
};
exports.default = SvgStarHalf;