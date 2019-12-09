"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDtr = function SvgDtr(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#121747",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M13.524 17.152c0 .86-.69 1.556-1.542 1.556a1.548 1.548 0 01-1.541-1.556V6.81c0-.859.69-1.556 1.541-1.556a1.55 1.55 0 011.542 1.557v10.341zm-5.19.004a1.554 1.554 0 01-.761 1.365 1.523 1.523 0 01-1.551 0 1.554 1.554 0 01-.76-1.365v-2.325a1.554 1.554 0 01.76-1.365 1.524 1.524 0 011.55 0 1.554 1.554 0 01.761 1.365l.001 2.325z",
      fill: "white"
    }),
    _react2.default.createElement("path", {
      opacity: 0.5,
      d: "M18.717 13.05c0 .859-.69 1.555-1.542 1.555a1.55 1.55 0 01-1.542-1.556V9.124c0-.859.69-1.556 1.542-1.556.852 0 1.542.697 1.542 1.556v3.926z",
      fill: "white"
    })
  );
};

exports.default = SvgDtr;