"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBlock = function SvgBlock(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#101341",
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
      d: "M8.266 5.25h7.671L19.875 12l-3.938 6.75H8.198l3.87-6.75-3.802-6.75zm4.073 2.375L14.852 12l-2.512 4.375h2.24L17.093 12l-2.513-4.375h-2.24z",
      fill: "white"
    }),
    _react2.default.createElement("path", {
      opacity: 0.5,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.085 8.27L6.908 12l2.157 3.697-1.379 2.407L4.125 12l3.592-6.158L9.085 8.27z",
      fill: "white"
    })
  );
};

exports.default = SvgBlock;