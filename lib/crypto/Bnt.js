"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBnt = function SvgBnt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#000D2B",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M11.94 4.41L8.552 6.395l3.388 1.986 3.452-1.986L11.94 4.41zm.557 10.6v3.972l4.603-2.626v-3.972l-4.603 2.627zm3.453-7.366v3.972l-3.454 1.986V9.63l3.454-1.986zm-8.312 3.972l3.453 1.986V9.63L7.638 7.644v3.972zm0 5.38l3.453 1.986V15.01l-3.453-1.986v3.972z",
      fill: "white"
    })
  );
};

exports.default = SvgBnt;