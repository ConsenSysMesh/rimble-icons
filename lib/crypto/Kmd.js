"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgKmd = function SvgKmd(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#326464",
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
      d: "M12 3.75l5.611 2.405a.7.7 0 01.371.375L20.25 12l-2.267 5.535a.697.697 0 01-.378.38L12 20.25l-5.605-2.335a.7.7 0 01-.378-.38L3.75 12l2.268-5.47a.699.699 0 01.37-.376L12 3.75zm0 3.356L8.574 8.574 7.106 12l1.468 3.426L12 16.894l3.426-1.468L16.894 12l-1.468-3.426L12 7.106zm0 1.468l2.447.979.979 2.447-.979 2.447-2.447.979-2.447-.979L8.574 12l.979-2.447L12 8.574z",
      fill: "white"
    })
  );
};

exports.default = SvgKmd;