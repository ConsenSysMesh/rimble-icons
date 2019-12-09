"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgCnd = function SvgCnd(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#383939",
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
      d: "M14.605 8.61l2-.459.775-1.276-.765-1.255-.98-.676-2.012-.444-1.241.7-1.986-.354-2.727 1.889-.212 2.206-1.158.483.134 2.047-.808.644.807 2.304.121.241.854 2.372 1.754.622 1.3 1.323 1.496.523.677-.195 1.073-.124 1.573-.45 2.345-1.324-.613-2.424-1.181-.465-.588.672-1.654.407-2.405-.381-.776-.898.27-.878-1.137-1.8.956-1.166.102-1.984 1.37-.786.939-.375 1.274.23.423 1.05z",
      fill: "white"
    })
  );
};

exports.default = SvgCnd;