"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgWtc = function SvgWtc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#8200FF",
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
      d: "M13.81 9.875L13.3 10c-.46.112-.783.517-.783.982v3.404l-1.685.412a.517.517 0 01-.642-.492V8.64a.51.51 0 01.392-.492l2.586-.633a.517.517 0 01.642.491v1.869zm-5.689-.032L7.482 10c-.46.112-.784.517-.784.982v3.435l-1.555.381a.518.518 0 01-.643-.492V8.64a.51.51 0 01.391-.492l2.587-.633a.518.518 0 01.642.491v1.838h.001zm8.15-1.68l2.586-.632a.518.518 0 01.643.491v5.667a.508.508 0 01-.392.491l-2.586.633a.517.517 0 01-.642-.491V8.655c0-.232.161-.435.391-.491z",
      fill: "white"
    }),
    _react2.default.createElement("path", {
      opacity: 0.504,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.673 9.985v4.321c0 .083.01.165.03.246.129.503.62.824 1.133.76v.704a.508.508 0 01-.392.492l-2.585.633a.517.517 0 01-.643-.492v-5.667c0-.232.161-.435.391-.491l2.066-.506zm5.69.032v4.305c0 .083.01.165.03.246.139.542.7.872 1.255.737l.007-.002v.712a.51.51 0 01-.391.492l-2.587.633a.517.517 0 01-.642-.49v-5.668c0-.232.161-.435.392-.491l1.934-.474h.001z",
      fill: "white"
    })
  );
};

exports.default = SvgWtc;