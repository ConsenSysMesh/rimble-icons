"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = (0, _styledComponents2.default)("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgSentimentNeutral = function SvgSentimentNeutral(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    _react2.default.createElement("path", { d: "M9 14h6v1.5H9z" }),
    _react2.default.createElement("circle", { cx: 15.5, cy: 9.5, r: 1.5 }),
    _react2.default.createElement("circle", { cx: 8.5, cy: 9.5, r: 1.5 }),
    _react2.default.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
    _react2.default.createElement("path", { fill: "none", d: "M0 0h24v24H0z" })
  );
};

SvgSentimentNeutral.displayName = "SvgSentimentNeutral";
SvgSentimentNeutral.defaultProps = {
  size: 24
};
exports.default = SvgSentimentNeutral;