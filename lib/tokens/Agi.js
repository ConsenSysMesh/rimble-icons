"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAgi = function SvgAgi(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#6916FF",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M12.858 4.818a.21.21 0 01-.06-.272.217.217 0 01.233 0c.529.22 1.007.544 1.406.954.228.21.418.457.563.727.153.276.278.565.375.864.092.31.14.632.141.954-.047.319-.094 1.864-.985 2.591a.536.536 0 01-.703-.136.47.47 0 01-.047-.545A3.786 3.786 0 0013.875 6a8.24 8.24 0 00-1.017-1.182zm-1.383 13.937c.094.09.094.181.047.227-.046.046-.14.09-.187.045a4.221 4.221 0 01-1.406-.954 2.781 2.781 0 01-.563-.728 4.851 4.851 0 01-.375-.863 3.362 3.362 0 01-.141-.955c.047-.318.094-1.863.985-2.591a.535.535 0 01.702.136.404.404 0 010 .546 3.785 3.785 0 00-.093 3.955c.303.425.65.82 1.031 1.181z",
      fill: "white",
      fillOpacity: 0.5
    }),
    _react2.default.createElement("path", {
      d: "M15.52 15.005a4.104 4.104 0 00-.984-2.364 8.112 8.112 0 00-1.969-1.455c-.633-.35-1.23-.762-1.781-1.231a3.024 3.024 0 01-.89-1.591 3.182 3.182 0 01.229-1.86 5.02 5.02 0 011.317-1.681.195.195 0 00.047-.228.182.182 0 00-.281-.045A4.183 4.183 0 009.38 6.095a3.757 3.757 0 00-.661 2.455c.037.439.148.868.328 1.273.195.397.447.765.75 1.091a8.086 8.086 0 002.015 1.409c.636.33 1.234.726 1.782 1.181.481.423.797 1.003.89 1.637.133.66.05 1.342-.234 1.955a4.598 4.598 0 01-1.36 1.636.155.155 0 00-.047.227.18.18 0 00.13.091.184.184 0 00.152-.045 5.85 5.85 0 001.781-1.591 3.88 3.88 0 00.614-2.41z",
      fill: "white"
    })
  );
};

exports.default = SvgAgi;