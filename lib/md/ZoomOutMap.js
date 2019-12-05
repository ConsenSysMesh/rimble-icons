"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgZoomOutMap = function SvgZoomOutMap(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", height: props.size, width: props.size }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "zoomOutMap_svg__a", d: "M0 0h24v24H0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "zoomOutMap_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#zoomOutMap_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      clipPath: "url(#zoomOutMap_svg__b)",
      d: "M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"
    }),
    _react2.default.createElement("path", { clipPath: "url(#zoomOutMap_svg__b)", fill: "none", d: "M0 0h24v24H0z" })
  );
};

exports.default = SvgZoomOutMap;