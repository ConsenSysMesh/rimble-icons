"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgEthos = function SvgEthos(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#00FFBA",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M8.153 8.178a1.28 1.28 0 00-.145 1.611 1.27 1.27 0 001.065.567 1.641 1.641 0 11-.001 3.283 4.564 4.564 0 01-3.208-7.814A4.563 4.563 0 0112 5.57a4.564 4.564 0 00-1.636 3.504 1.64 1.64 0 001.63 1.642 1.641 1.641 0 01-1.64-1.642 1.267 1.267 0 00-.218-.716 1.295 1.295 0 00-.565-.466 1.292 1.292 0 00-.998 0c-.158.067-.3.164-.42.287zm10.98 4.971a4.57 4.57 0 01-3.266 6.247 4.563 4.563 0 01-5.503-4.47 1.642 1.642 0 113.281 0 1.276 1.276 0 00.784 1.183 1.29 1.29 0 001.006-.004c.307-.132.55-.38.679-.688a1.287 1.287 0 00-1.186-1.773 1.641 1.641 0 110-3.283 4.562 4.562 0 014.204 2.788h.001z",
      fill: "white"
    }),
    _react2.default.createElement("path", {
      opacity: 0.7,
      d: "M11.996 13.286c.906 0 1.64.735 1.64 1.64a4.563 4.563 0 01-9.053.83 4.565 4.565 0 014.49-5.395 1.641 1.641 0 010 3.283c-.256 0-.505.075-.716.218a1.283 1.283 0 00-.207 1.955v.001a1.28 1.28 0 002.055-.288c.099-.186.15-.394.149-.604 0-.905.735-1.64 1.642-1.64zm6.994-6.297a4.568 4.568 0 01-4.062 6.65 1.641 1.641 0 110-3.283 1.283 1.283 0 10-1.283-1.282 1.64 1.64 0 01-2.813 1.183 1.641 1.641 0 01-.468-1.183 4.565 4.565 0 017.287-3.665l.003.002c.56.418 1.017.957 1.335 1.578h.001z",
      fill: "white"
    })
  );
};

exports.default = SvgEthos;