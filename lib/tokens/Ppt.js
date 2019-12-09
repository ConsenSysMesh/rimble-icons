"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPpt = function SvgPpt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#152743",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M12.037 6.237c-.987 0-1.788-.55-1.788-1.228 0-.68.8-1.229 1.788-1.229.987 0 1.786.55 1.786 1.229 0 .678-.8 1.228-1.786 1.228zm-.925 13.713V6.828h3.984c.148 0 .252.11.252.258v7.281c0 .147-.105.273-.252.273H12.9v5.31c0 .148-.113.282-.26.282h-1.251a.287.287 0 01-.277-.281v-.001zm-.672-5.31H8.933a.284.284 0 01-.281-.274v-7.28c0-.148.133-.258.28-.258h1.508v7.812z",
      fill: "white"
    })
  );
};

exports.default = SvgPpt;