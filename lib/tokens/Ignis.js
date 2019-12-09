"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIgnis = function SvgIgnis(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#F9C011",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M11.109 4.5c1.139.665 2.21 1.436 3.338 2.119l-4.158 7.253c-.553-.968-1.07-1.956-1.615-2.93.785-2.156 1.682-4.274 2.435-6.442zM7.5 19.5c2.354-4.282 4.8-8.516 7.128-12.81.623 1.093 1.246 2.186 1.872 3.278-1.805 3.174-3.623 6.34-5.413 9.521-1.196 0-2.39-.015-3.587.011zm3.812-.017c.997-1.707 1.937-3.443 2.947-5.142.602.77 1.213 1.537 1.811 2.31-1.58.954-3.167 1.898-4.758 2.832z",
      fill: "white"
    })
  );
};

exports.default = SvgIgnis;