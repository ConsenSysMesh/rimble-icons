"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgXby = function SvgXby(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#56F4F1",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M4.5 6.762c0-.011.157-.012 2.189-.01l2.189.002 1.245 2.095 1.266 2.13.02.036.199-.338c.108-.186.196-.341.195-.346l-1.058-1.785a232.64 232.64 0 01-1.054-1.785c0-.01.329-.011 2.304-.011 1.28 0 2.305.003 2.305.008 0 .014-4.887 8.322-4.898 8.325-.008.001-.723-1.207-2.457-4.153A879.806 879.806 0 014.5 6.762zm10.605-.007c0-.003.99-.005 2.198-.005H19.5l-.003.016c-.002.01-1.097 1.876-2.433 4.147-1.62 2.75-2.434 4.13-2.445 4.131-.01.002-.24-.38-1.009-1.675l-1.002-1.682c-.007-.003-.4.665-.397.674 0 .003.453.765 1.003 1.692.339.563.671 1.129.998 1.698-.007.027-2.202 3.747-2.211 3.749-.014.003-2.197-3.705-2.192-3.724.003-.008 5.215-8.887 5.295-9.02h.001z",
      fill: "white"
    })
  );
};

exports.default = SvgXby;