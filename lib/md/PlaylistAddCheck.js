"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgPlaylistAddCheck = function SvgPlaylistAddCheck(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), _react2["default"].createElement("defs", null, _react2["default"].createElement("path", {
    id: "playlistAddCheck_svg__a",
    d: "M0 0h24v24H0V0z"
  })), _react2["default"].createElement("clipPath", {
    id: "playlistAddCheck_svg__b"
  }, _react2["default"].createElement("use", {
    xlinkHref: "#playlistAddCheck_svg__a",
    overflow: "visible"
  })), _react2["default"].createElement("path", {
    clipPath: "url(#playlistAddCheck_svg__b)",
    d: "M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"
  }));
};

SvgPlaylistAddCheck.displayName = "SvgPlaylistAddCheck";
SvgPlaylistAddCheck.defaultProps = {
  size: 24,
  color: "inherit"
};
exports["default"] = SvgPlaylistAddCheck;