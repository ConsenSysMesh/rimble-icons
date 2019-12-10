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

var SvgIndeterminateCheckBox = function SvgIndeterminateCheckBox(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "indeterminateCheckBox_svg__a", d: "M0 0h24v24H0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "indeterminateCheckBox_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#indeterminateCheckBox_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      clipPath: "url(#indeterminateCheckBox_svg__b)",
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
    })
  );
};

SvgIndeterminateCheckBox.displayName = "SvgIndeterminateCheckBox";
SvgIndeterminateCheckBox.defaultProps = {
  size: 24
};
exports.default = SvgIndeterminateCheckBox;