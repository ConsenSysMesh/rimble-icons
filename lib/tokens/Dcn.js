"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDcn = function SvgDcn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#136485",
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
      d: "M7.827 23.255a12.005 12.005 0 01-4.203-2.662l.11-.192c1.791-2.83 3.4-5.759 4.611-8.888 1.285-3.319 2.313-6.725 3.293-10.145.088-.305.192-.605.288-.908a.8.8 0 01.172.341c.615 2.194 1.21 4.395 1.848 6.582 1.163 3.985 2.798 7.765 4.963 11.308.253.412.683 1.104 1.29 2.071a11.99 11.99 0 01-4.526 2.666A3205.116 3205.116 0 0011.92 12.05l-.115-.001c-.875 2.458-2.2 6.192-3.979 11.206zM12.057.037h-.094L12 0l.056.037z",
      fill: "white"
    })
  );
};

exports.default = SvgDcn;