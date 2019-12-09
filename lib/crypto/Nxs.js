"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgNxs = function SvgNxs(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#4099CD",
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
      d: "M1.504 17.82c.454-1.323 1.328-2.755 2.546-4.17a1.5 1.5 0 012.091-2.107A26.233 26.233 0 019.219 9.21c5.2-3.377 10.697-4.455 13.377-2.849a11.926 11.926 0 011.366 4.677c-.866 2.834-3.725 6.22-7.799 8.865-2.81 1.825-5.707 2.98-8.2 3.4a12.04 12.04 0 01-6.46-5.484zm2.812-3.896c-1.758 2.03-2.462 4.12-1.61 5.433 1.287 1.982 5.64 1.44 9.72-1.21 4.082-2.65 6.347-6.406 5.06-8.389-1.288-1.982-5.64-1.44-9.721 1.21a17.98 17.98 0 00-1.288.919 1.5 1.5 0 01-2.16 2.037z",
      fill: "white"
    })
  );
};

exports.default = SvgNxs;