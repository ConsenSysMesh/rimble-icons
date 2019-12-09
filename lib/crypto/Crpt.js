"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgCrpt = function SvgCrpt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#00BDCD",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M16.375 7.308a5.823 5.823 0 00-3.794-1.385c-3.146 0-5.737 2.488-5.953 5.668H6.01c.216-3.558 3.085-6.298 6.57-6.298 1.543 0 3.023.567 4.226 1.575l-.432.44zm-.216 2.078A4.397 4.397 0 0012.58 7.53c-2.436 0-4.41 2.015-4.41 4.471 0 2.487 1.974 4.503 4.41 4.503 1.414 0 2.744-.69 3.578-1.858l.433.44c-.957 1.291-2.438 2.048-4.01 2.048-2.777 0-5.029-2.3-5.029-5.133 0-2.802 2.252-5.101 5.028-5.101a4.991 4.991 0 014.01 2.047l-.432.44zm.71-1.605l.432-.441c.154.157.277.314.4.472l-.431.44a5.521 5.521 0 00-.402-.472zM12.55 18.738c-3.485 0-6.354-2.739-6.57-6.297h.617c.216 3.18 2.807 5.668 5.953 5.668a5.824 5.824 0 003.794-1.386l.432.44a6.517 6.517 0 01-4.226 1.576v-.001zm4.318-2.487c.155-.158.278-.315.402-.473l.431.44c-.123.158-.246.316-.4.473l-.433-.44zM5.118 12c0 4.188 3.36 7.62 7.463 7.62 2.221 0 4.318-.976 5.738-2.77l.431.44c-1.542 1.89-3.763 2.96-6.169 2.96C8.11 20.25 4.5 16.534 4.5 12c0-4.566 3.64-8.25 8.081-8.25 2.374 0 4.628 1.07 6.169 2.96l-.432.441C16.899 5.388 14.802 4.38 12.58 4.38c-4.102 0-7.463 3.432-7.463 7.62z",
      fill: "white"
    })
  );
};

exports.default = SvgCrpt;