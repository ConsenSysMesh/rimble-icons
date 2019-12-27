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

var SvgWatchLater = function SvgWatchLater(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "watchLater_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "watchLater_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#watchLater_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      clipPath: "url(#watchLater_svg__b)",
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
    })
  );
};

SvgWatchLater.displayName = "SvgWatchLater";
SvgWatchLater.defaultProps = {
  size: 24,
  color: "inherit"
};
exports.default = SvgWatchLater;