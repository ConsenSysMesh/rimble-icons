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

var SvgZel = function SvgZel(props) {
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
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.75 11.711l3.371-1.903 3.37 1.903v3.636l-3.37 1.903-3.371-1.903V11.71zm9.758 0l3.37-1.903 3.372 1.903v3.636l-3.371 1.903-3.37-1.903V11.71h-.002zm-.354 3.158l-1.183.65-1.124-.617v-3.48L7.772 9.685V8.422L11.97 6l4.198 2.422V9.72l-3.016 1.702v3.447z",
      fill: "white"
    })
  );
};

SvgZel.displayName = "SvgZel";
SvgZel.defaultProps = {
  size: 24,
  color: "#183C87"
};
exports.default = SvgZel;