"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDgd = function SvgDgd(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#F4D029",
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
      d: "M9.375 8.25v2.25h-5.25V8.25h5.25zm.75 0h1.5v7.5h-7.5v-4.5h6v-3zm-4.5 4.5v1.5h4.5v-1.5h-4.5zm14.25-3h-6v4.5h4.5v-1.5h-3v-1.5h4.5v4.5h-7.5v-7.5h7.5v1.5z",
      fill: "white"
    })
  );
};

exports.default = SvgDgd;