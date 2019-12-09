"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgVrc = function SvgVrc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#418BCA",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M15.199 6h3.551L12 19.5 5.25 6h3.528l3.245 6.835L15.2 6zM12 9.72c-.591 0-1.07-.493-1.07-1.1 0-.606.479-1.099 1.07-1.099.591 0 1.07.493 1.07 1.1 0 .606-.48 1.098-1.07 1.098zm4.849 3.03c.59 0 1.07.492 1.07 1.099s-.48 1.098-1.07 1.098c-.591 0-1.07-.491-1.07-1.098 0-.607.479-1.099 1.07-1.099z",
      fill: "white"
    })
  );
};

exports.default = SvgVrc;