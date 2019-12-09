"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgMnz = function SvgMnz(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#7F368A",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M19.177 15.987c.049.197-.148.295-.296.247h-2.458c-.148 0-.246-.05-.345-.1-.147-.049-.245-.245-.295-.443v-.049l-2.311-8.524c-.05 0-.197.147-.246.147-.05.049-.148.099-.197.049-.098-.049-.148-.196-.098-.295.097-.246.344-.395.59-.444.295-.05.54-.05.835-.05h1.82c.148 0 .296 0 .443.05.148.099.197.296.246.444.098.345.147.69.246 1.035l1.18 4.435.442 1.774c.148.542.345 1.134.443 1.725v-.001zm-5.705 0c.049.197-.148.295-.295.247h-2.46c-.147 0-.245-.05-.345-.1-.146-.049-.245-.245-.294-.443v-.049L7.767 7.118c-.05 0-.197.147-.246.147-.05.049-.148.099-.197.049-.098-.049-.147-.196-.098-.295.098-.246.344-.395.59-.444.295-.05.54-.05.836-.05h1.82c.147 0 .295 0 .442.05.148.099.197.296.246.444.098.345.148.69.246 1.035l1.18 4.435.443 1.774c.148.542.344 1.134.443 1.725v-.001zm-4.525-1.873l-.59 1.873a.473.473 0 01-.443.345H5.308a.494.494 0 01-.492-.493v-.099L6.88 7.955c.05-.1.148-.198.246-.198.148 0 .246.099.246.198l1.574 6.16zm5.803-.148l-.344 1.036c-.05.098-.098.147-.197.147-.098 0-.147-.05-.197-.147l-1.721-6.013.345-1.232c0-.099.098-.147.197-.147.097 0 .196.048.196.147l1.721 6.21z",
      fill: "white"
    })
  );
};

exports.default = SvgMnz;