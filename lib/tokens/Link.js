"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgLink = function SvgLink(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#01A6FB",
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
      d: "M11.25 13.963v1.787a.75.75 0 101.5 0v-1.787a1.126 1.126 0 10-1.5 0zM7.5 10.5V9a4.5 4.5 0 019 0v1.5a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75zm9 0H9.375V9.075c0-1.491 1.175-2.7 2.625-2.7s2.625 1.209 2.625 2.7V10.5H12h4.5z",
      fill: "white"
    })
  );
};

exports.default = SvgLink;