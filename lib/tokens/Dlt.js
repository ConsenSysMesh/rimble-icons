"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDlt = function SvgDlt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#F4AE95",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M11.855 6.718l-4.57 9.756h7.588a.55.55 0 01.504.341l.008.019a.48.48 0 01-.023.42.72.72 0 01-.626.371H6.672a.619.619 0 01-.35-.109l-.042-.028a.655.655 0 01-.217-.818l5.393-11.362a.928.928 0 01.234-.307.52.52 0 01.67-.008.373.373 0 01.1.13l5.47 11.438a.71.71 0 01.044.5.428.428 0 01-.411.317H17.5a.657.657 0 01-.596-.387L12.187 6.72a.183.183 0 00-.165-.109.183.183 0 00-.167.107z",
      fill: "white"
    })
  );
};

exports.default = SvgDlt;