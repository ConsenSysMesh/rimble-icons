"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgCallMissedOutgoing = function SvgCallMissedOutgoing(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "callMissedOutgoing_svg__a", d: "M24 24H0V0h24v24z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "callMissedOutgoing_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#callMissedOutgoing_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      clipPath: "url(#callMissedOutgoing_svg__b)",
      d: "M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"
    })
  );
};

exports.default = SvgCallMissedOutgoing;