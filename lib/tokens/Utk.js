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

var SvgUtk = function SvgUtk(props) {
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
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M10.765 16.724V6.77h-2.89V4.5h8.25v2.271h-2.89v9.953h-2.47zM10.1 19.5c-1.492 0-2.198-.717-2.198-2.233V7.421h2.17v9.744c0 .24.08.32.315.32h3.254c.236 0 .315-.08.315-.32V7.422h2.169v9.845c0 1.516-.707 2.233-2.197 2.233h-3.829z",
      fill: "white"
    })
  );
};

SvgUtk.displayName = "SvgUtk";
SvgUtk.defaultProps = {
  size: 24,
  color: "#30367A"
};
exports.default = SvgUtk;