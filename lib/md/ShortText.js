"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgShortText = function SvgShortText(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", height: props.size, width: props.size }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "shortText_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "shortText_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#shortText_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", { d: "M4 9h16v2H4zm0 4h10v2H4z", clipPath: "url(#shortText_svg__b)" })
  );
};

exports.default = SvgShortText;