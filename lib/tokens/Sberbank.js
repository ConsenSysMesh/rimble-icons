"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgSberbank = function SvgSberbank(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#48B254",
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
      d: "M17.01 5.526l.71.644-8.95 5.108L4.44 8.785l.404-.805 3.928 2.233 8.24-4.688v.001zM15.21 4.5l.95.483-7.39 4.224-3.44-1.952.586-.703L8.77 8.181 15.21 4.5zm3.137 2.333l.526.704L8.77 13.31l-4.878-2.776.222-.885 4.657 2.656 9.576-5.472zm1.457 2.595c.298.832.446 1.703.446 2.615 0 .912-.148 1.798-.445 2.655l-.203.543a8.357 8.357 0 01-1.761 2.615 8.136 8.136 0 01-2.633 1.73 8.132 8.132 0 01-6.438 0 8.503 8.503 0 01-2.611-1.73 7.926 7.926 0 01-1.761-2.615 8.21 8.21 0 01-.648-3.198V11.5l5.02 2.836L19.36 8.302l.445 1.126z",
      fill: "white"
    })
  );
};

exports.default = SvgSberbank;