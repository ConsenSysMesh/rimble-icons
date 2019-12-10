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

var SvgFlightLand = function SvgFlightLand(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "flightLand_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "flightLand_svg__c", d: "M0 0h24v24H0V0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "flightLand_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#flightLand_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "flightLand_svg__d", clipPath: "url(#flightLand_svg__b)" },
      _react2.default.createElement("use", { xlinkHref: "#flightLand_svg__c", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      d: "M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z",
      clipPath: "url(#flightLand_svg__d)"
    })
  );
};

SvgFlightLand.displayName = "SvgFlightLand";
SvgFlightLand.defaultProps = {
  size: 24
};
exports.default = SvgFlightLand;