"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgWan = function SvgWan(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#136AAD",
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
      d: "M5.25 8.318l2 .847v4.765L12 11.09l4.796 2.84V9.165l1.954-.847v8.98L12 13.312l-6.75 3.986v-8.98zm.227-.367L12 4.125l6.569 3.826-1.773.733L12 5.912 7.25 8.684l-1.773-.733zm1.41 8.866l1.477-.848 3.659 2.119 3.613-2.119 1.523.848-5.136 3.058-5.136-3.058z",
      fill: "white"
    })
  );
};

exports.default = SvgWan;