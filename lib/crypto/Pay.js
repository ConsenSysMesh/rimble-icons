"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPay = function SvgPay(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#302C2C",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M20.183 11.772a.85.85 0 00-.162-.225c-1.426-1.616-4.33-4.797-4.33-4.797l-3.687 4.034-3.735-3.996s-2.937 3.21-4.377 4.842c-.187.185-.187.518-.019.714.748.852 4.42 4.902 4.42 4.902L12 13.186l3.679 4.064 4.438-4.91s.093-.097.114-.162a.558.558 0 00-.047-.406zm-14.245.45c-.12-.143-.079-.365.033-.5.47-.534 2.348-2.55 2.348-2.55l2.617 2.78-2.622 2.867s-1.605-1.713-2.376-2.598zm11.992.094c-.056.095-.12.184-.192.266l-2.033 2.209L13.08 12l2.583-2.831s1.488 1.541 2.17 2.37c.058.072.126.14.155.232.062.179.023.378-.06.544",
      fill: "white"
    })
  );
};

exports.default = SvgPay;