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

var SvgFlightTakeoff = function SvgFlightTakeoff(props) {
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
      _react2.default.createElement("path", { id: "flightTakeoff_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "flightTakeoff_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#flightTakeoff_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      d: "M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z",
      clipPath: "url(#flightTakeoff_svg__b)"
    }),
    _react2.default.createElement("path", {
      clipPath: "url(#flightTakeoff_svg__b)",
      fill: "none",
      d: "M0 0h24v24H0V0z"
    })
  );
};

SvgFlightTakeoff.displayName = "SvgFlightTakeoff";
SvgFlightTakeoff.defaultProps = {
  size: 24,
  color: "inherit"
};
exports.default = SvgFlightTakeoff;