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

var SvgPersonPinCircle = function SvgPersonPinCircle(props) {
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
      _react2.default.createElement("path", { id: "personPinCircle_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "personPinCircle_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#personPinCircle_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      clipPath: "url(#personPinCircle_svg__b)",
      d: "M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2a2 2 0 11.001 4.001A2 2 0 0112 4zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05A4.783 4.783 0 0112 14z"
    })
  );
};

SvgPersonPinCircle.displayName = "SvgPersonPinCircle";
SvgPersonPinCircle.defaultProps = {
  size: 24,
  color: "inherit"
};
exports.default = SvgPersonPinCircle;