"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgCix = function SvgCix(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#0576B4",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M18.501 14.147l-.794-.497 1.732-.02.037-.02v.019l.715-.008-1.214 1.976-.109-.952-5.523 3.047-2.095-2.797-5.872 3.095v-.705l6.054-3.19 2.095 2.796 4.975-2.744zm-7.584-.678l-2.295 1.208V6.483h2.295v6.986zm6.49.36l-2.295 1.275V6.483h2.295v7.346z",
      fill: "white"
    }),
    _react2.default.createElement("path", {
      opacity: 0.5,
      d: "M14.162 15.632l-.493.273-1.803-2.407V7.42h2.296v8.211zm-6.49-.455l-2.295 1.209V8.484h2.295v6.693z",
      fill: "white"
    })
  );
};

exports.default = SvgCix;