"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPirl = function SvgPirl(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#96B73D",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M8.695 12.079c.065.193.16.375.283.538l-1.87-1.888a1.05 1.05 0 010-1.478l2.36-2.36a1.88 1.88 0 00.14-.116l.068-.06 1.91-1.911a1.032 1.032 0 011.465.002l6.257 6.302a1.056 1.056 0 01-.755 1.66 1.068 1.068 0 01-.693-.163l-5.528-5.58-.006-.007-.018-.02-2.957 2.958-.045.038a.25.25 0 01-.005.006l2.922 2.945a1.05 1.05 0 01-.465 1.749 1.033 1.033 0 01-1.003-.27l-1.497-1.508c-.022-.02-.044-.045-.07-.072l-.07-.07a1.934 1.934 0 01-.14-.177l.034.04-.023-.03a1.897 1.897 0 01-.294-.528zm6.11 1.93l-2.926-2.947a1.05 1.05 0 01.337-1.703 1.034 1.034 0 011.13.228l1.498 1.508c.021.018.043.045.07.071l.069.069c.039.043.075.09.108.137l.016.02a3.481 3.481 0 00-.064-.089L17 13.273a1.05 1.05 0 010 1.48l-2.36 2.36c-.05.036-.097.074-.143.114l-1.967 1.968a1.032 1.032 0 01-1.466 0l-6.358-6.41a1.056 1.056 0 01.139-1.408 1.037 1.037 0 011.404.008l5.538 5.591.019.023 2.951-2.95.043-.036.005-.005z",
      fill: "white"
    })
  );
};

exports.default = SvgPirl;