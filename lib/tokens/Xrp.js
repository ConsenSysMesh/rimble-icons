"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgXrp = function SvgXrp(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#00AAE4",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M16.47 13.654c-.517-.306-1.1-.395-1.678-.416-.484-.017-1.207-.335-1.207-1.237a1.24 1.24 0 011.207-1.24c.578-.02 1.161-.109 1.679-.415 1.285-.76 1.852-2.355 1.345-3.784-.508-1.429-1.944-2.278-3.405-2.014-1.462.264-2.528 1.565-2.528 3.086 0 .606.212 1.165.48 1.683.226.435.34 1.245-.435 1.703-.578.341-1.298.125-1.658-.464-.303-.498-.67-.965-1.183-1.269a3.008 3.008 0 00-3.872.7 3.191 3.191 0 000 4.027 3.007 3.007 0 003.872.699c.514-.303.88-.77 1.184-1.268.25-.409.872-.93 1.657-.465.576.341.754 1.088.435 1.704-.27.517-.48 1.076-.48 1.683 0 1.52 1.066 2.821 2.528 3.085 1.461.264 2.897-.585 3.405-2.014.507-1.428-.06-3.024-1.345-3.784h-.001z",
      fill: "white"
    })
  );
};

exports.default = SvgXrp;