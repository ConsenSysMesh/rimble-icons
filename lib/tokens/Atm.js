"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAtm = function SvgAtm(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#346FCE",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.12 14.03l.717 1.347a3.277 3.277 0 01-1.354 4.431l-.094.05a3.278 3.278 0 01-4.431-1.355L7.54 13.957a3.277 3.277 0 011.195-4.34l-.717-1.348a3.277 3.277 0 011.355-4.431l.093-.05a3.277 3.277 0 014.43 1.355l2.418 4.546a3.277 3.277 0 01-1.193 4.34h-.001zm0 0l-1.7-3.2a3.276 3.276 0 00-4.431-1.354l-.093.049c-.055.03-.109.06-.162.092l1.701 3.198a3.277 3.277 0 004.431 1.355l.094-.049c.054-.03.108-.06.16-.091z",
      fill: "white"
    })
  );
};

exports.default = SvgAtm;