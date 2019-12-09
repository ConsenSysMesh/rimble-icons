"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAct = function SvgAct(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#767DFF",
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
      d: "M10.328 4.875h3.345a.653.653 0 01.569.333l5.18 9.24a.651.651 0 010 .637l-1.658 2.956a.653.653 0 01-.569.334H6.805a.652.652 0 01-.57-.334L4.58 15.085a.653.653 0 010-.638l5.18-9.239a.653.653 0 01.569-.333zM12 8.551l-3.49 6.215h6.98L12 8.551z",
      fill: "white"
    })
  );
};

exports.default = SvgAct;