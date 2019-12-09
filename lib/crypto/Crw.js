"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgCrw = function SvgCrw(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#0F1529",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.625 11.51c-.151.033-.255.053-.356.08-.633.165-1.272.297-1.932.272-.882-.034-1.64-.389-2.307-.96-.27-.232-.521-.487-.779-.733-.125-.119-.155-.254-.06-.409l.244-.395.329.362c.475.526.982 1.005 1.652 1.261.658.25 1.328.214 2 .1.951-.158 1.83-.538 2.69-.965.03-.014.06-.023.144-.056-.057.107-.088.17-.125.23-1.256 2.114-2.514 4.227-3.772 6.34-.155.26-.212.28-.48.148-1.775-.871-3.634-1.037-5.552-.707-.3.052-.354.026-.497-.281-.156-.337-.155-.328.2-.396.988-.193 2-.234 3.001-.122.937.105 1.87.243 2.73.684.123.064.188.01.25-.091.545-.911 1.09-1.822 1.639-2.73.293-.487.592-.97.887-1.455.026-.042.046-.087.094-.178zm-13.24.09c.125.213.251.425.379.636l2.523 4.185c.12.2.12.206-.088.301-.448.206-.392.26-.666-.199-.968-1.623-1.934-3.249-2.9-4.873l-.783-1.316c-.037-.063-.067-.13-.1-.195l.03-.04c.11.05.22.095.33.146.661.31 1.331.598 2.04.773.911.227 1.81.253 2.678-.18.54-.269.985-.666 1.386-1.118.64-.726 1.161-1.54 1.633-2.39l.115-.205c.062.093.102.163.152.225.277.339.211.64-.022.992-.52.782-1.045 1.558-1.738 2.194-.619.569-1.313.998-2.13 1.193-.64.154-1.284.123-1.926.004-.294-.055-.587-.116-.88-.175l-.034.042z",
      fill: "white"
    })
  );
};

exports.default = SvgCrw;