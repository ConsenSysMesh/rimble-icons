"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgEos = function SvgEos(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "black",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M8.164 8.707L12 20.75l-5.691-3.565 1.855-8.478L12 3.468v3.675L6.309 17.185h11.387l-5.69-10.042V3.468l3.834 5.24 1.856 8.477-5.69 3.565L15.84 8.707",
      stroke: "white",
      strokeWidth: 0.64,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  );
};

exports.default = SvgEos;