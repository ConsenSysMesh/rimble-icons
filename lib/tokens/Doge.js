"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDoge = function SvgDoge(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#C3A634",
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
      d: "M9.936 10.957h3.236v1.715H9.935v3.613h2.04c.808 0 1.47-.108 1.984-.327.514-.219.918-.52 1.211-.908a3.3 3.3 0 00.597-1.361A8.548 8.548 0 0015.925 12a8.548 8.548 0 00-.157-1.689 3.297 3.297 0 00-.597-1.361c-.293-.387-.697-.69-1.211-.908-.515-.219-1.176-.327-1.983-.327H9.936v3.243zm-2.074 1.715H6.75v-1.714h1.112V6h4.911c.908 0 1.693.157 2.357.47a4.392 4.392 0 011.626 1.287c.42.543.732 1.178.937 1.907.205.728.307 1.507.307 2.336a8.603 8.603 0 01-.308 2.336 5.504 5.504 0 01-.937 1.908c-.42.543-.961.971-1.625 1.286-.664.313-1.45.47-2.357.47H7.862v-5.328z",
      fill: "white"
    })
  );
};

exports.default = SvgDoge;