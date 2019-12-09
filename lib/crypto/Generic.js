"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgGeneric = function SvgGeneric(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#EFB914",
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
      d: "M15.752 7.391A5.96 5.96 0 0118 11.46l-2.135-.531a4.017 4.017 0 00-2.895-2.75c-2.15-.536-4.32.742-4.849 2.854-.529 2.111.787 4.256 2.938 4.79a4.03 4.03 0 003.85-1.072l2.135.53a5.982 5.982 0 01-3.9 2.54l-.607 2.43-1.947-.484.483-1.931a6.22 6.22 0 01-.973-.242l-.483 1.931-1.947-.485.608-2.43c-1.784-1.407-2.682-3.747-2.103-6.061.578-2.314 2.473-3.96 4.71-4.367l.607-2.431 1.947.484-.483 1.931c.33.054.656.135.974.242l.482-1.931 1.947.484-.608 2.431z",
      fill: "white"
    })
  );
};

exports.default = SvgGeneric;