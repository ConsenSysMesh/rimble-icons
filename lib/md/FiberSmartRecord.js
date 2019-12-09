"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgFiberSmartRecord = function SvgFiberSmartRecord(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    _react2.default.createElement(
      "g",
      { fill: "#010101" },
      _react2.default.createElement("circle", { cx: 9, cy: 12, r: 8 }),
      _react2.default.createElement("path", { d: "M17 4.26v2.09a5.99 5.99 0 010 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z" })
    )
  );
};

exports.default = SvgFiberSmartRecord;