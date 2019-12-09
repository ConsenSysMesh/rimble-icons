"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAion = function SvgAion(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#00BFEC",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M11.978 17.363c-2.967 0-5.382-2.4-5.382-5.348 0-2.949 2.415-5.348 5.382-5.348 2.968 0 5.382 2.399 5.382 5.348 0 2.948-2.414 5.348-5.382 5.348zm0-9.648c-2.386 0-4.327 1.928-4.327 4.3 0 2.37 1.941 4.3 4.327 4.3 2.387 0 4.328-1.93 4.328-4.3 0-2.372-1.941-4.3-4.328-4.3zm3.769-1.812a7.228 7.228 0 00-3.769-1.054 7.252 7.252 0 00-3.5.898l-.512-.915a8.312 8.312 0 018.333.179l-.552.892zm1.571 12.383l-.681-.8a7.14 7.14 0 002.553-5.471h1.055a8.181 8.181 0 01-2.927 6.27zm-5.34 1.942a8.312 8.312 0 01-5.262-1.879l.672-.806a7.251 7.251 0 004.59 1.638c1.17 0 2.286-.27 3.317-.8l.485.93a8.33 8.33 0 01-3.802.918z",
      fill: "white"
    }),
    _react2.default.createElement("path", {
      opacity: 0.5,
      d: "M19.012 10.069a7.167 7.167 0 00-1.422-2.693l.675-.56a8.034 8.034 0 011.594 3.02l-.846.233zM5.145 16.482A8.057 8.057 0 013.8 12.015c0-2.222.885-4.296 2.493-5.842l.61.628a7.173 7.173 0 00-2.224 5.214c0 1.424.415 2.803 1.2 3.987l-.734.48z",
      fill: "white"
    })
  );
};

exports.default = SvgAion;