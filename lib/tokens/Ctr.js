"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgCtr = function SvgCtr(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#FDDE6C",
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
      d: "M12 20.25a8.25 8.25 0 110-16.5 8.25 8.25 0 010 16.5zm0-1.16a7.09 7.09 0 100-14.18 7.09 7.09 0 000 14.18zm.054-2.184c-2.698 0-4.87-2.063-4.87-4.879V12c0-2.75 2.118-4.905 4.978-4.905 1.929 0 3.17.809 4.007 1.967l-1.97 1.523c-.54-.674-1.16-1.105-2.064-1.105-1.322 0-2.253 1.118-2.253 2.493V12c0 1.415.93 2.52 2.253 2.52.985 0 1.565-.457 2.132-1.145l1.97 1.402c-.891 1.226-2.092 2.129-4.183 2.129z",
      fill: "white"
    })
  );
};

exports.default = SvgCtr;