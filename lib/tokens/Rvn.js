"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgRvn = function SvgRvn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#384182",
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
      d: "M7.125 20.25L9.838 7.658l1.523 9.45-4.236 3.142zM9.891 7.586l4.123 9.532-2.582-.045L9.89 7.585v.001zm.062-.072l5.4.767-1.252 8.837-4.149-9.604zm4.245 9.468l1.217-8.62.796 1.011-2.013 7.61zM15.335 8.2l-5.27-.75L14.81 5.89l.525 2.31zm-5.295-.83l3.23-2.24 1.54.678-4.77 1.562zm-.08-.027l.623-1.192 2.634-1.056-3.256 2.248zm.623-1.245l.297-.93 2.17-.073-2.467 1.002zm.28-1.003l.7-.75 1.506.678-2.206.072zm.744-.794l1.05-.515 1.357 1.589L11.607 4.3zm1.2-.452l1.566.686-.28.848-1.287-1.534zm1.338 1.561l.289-.866.35 1.192-.639-.325zm-1.453-1.66h1.147l.568.631a.036.036 0 01-.04.058l-1.675-.689zm1.812.722l2.333.651a.054.054 0 010 .105l-1.982.544-.35-1.3z",
      fill: "white"
    })
  );
};

exports.default = SvgRvn;