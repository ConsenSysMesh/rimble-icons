"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAdx = function SvgAdx(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#1B75BC",
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
      d: "M8.69 6.452L12 9.905l3.229-3.455L17.25 8.52 13.953 12l3.297 3.452-2.021 2.095L12 14.094l-3.31 3.453-1.94-2.037 3.27-3.53-3.27-3.46 1.94-2.068zm.267-.282L11.986 3l3.03 3.17-1.595 1.698-1.436-1.585-1.435 1.585L8.956 6.17zm0 11.66l1.594-1.698 1.435 1.585 1.436-1.585 1.595 1.698-3.03 3.17-3.03-3.17z",
      fill: "white"
    })
  );
};

exports.default = SvgAdx;