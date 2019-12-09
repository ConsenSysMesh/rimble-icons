"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPink = function SvgPink(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#ED79AA",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      opacity: 0.5,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.589 6.697l-1.402 1.412a5.429 5.429 0 00-3.865-1.612c-2.936 0-5.332 2.333-5.458 5.258h-.006v5.341A7.503 7.503 0 014.875 12c0-4.142 3.335-7.5 7.447-7.5a7.4 7.4 0 015.267 2.197zm0 10.606a7.4 7.4 0 01-5.145 2.197v-1.998a5.429 5.429 0 003.742-1.61l1.403 1.411z",
      fill: "white"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.76 18.588v-6.833h.006c.105-1.953 1.711-3.505 3.678-3.505 2.034 0 3.683 1.66 3.683 3.71 0 2.048-1.649 3.708-3.682 3.708a3.647 3.647 0 01-1.863-.507v4.133a7.368 7.368 0 01-1.821-.705v-.001zm3.684-4.754a1.868 1.868 0 001.862-1.874 1.869 1.869 0 00-1.862-1.876 1.869 1.869 0 00-1.862 1.876c0 1.034.834 1.874 1.862 1.874z",
      fill: "white"
    })
  );
};

exports.default = SvgPink;