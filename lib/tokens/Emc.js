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

var SvgEmc = function SvgEmc(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      fill: "currentcolor",
      height: props.size,
      width: props.size
    }),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "#B49FFC"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 6v2.4h4.8v2.4H6v2.4h7.2V8.4h2.4v7.2H6V18h12V6H6z",
      fill: "white"
    })
  );
};

SvgEmc.displayName = "SvgEmc";
SvgEmc.defaultProps = {
  size: 24,
  color: "#B49FFC"
};
exports.default = SvgEmc;