"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgExmo = function SvgExmo(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#347FFB",
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
      d: "M14.775 9.791l-2.152 5.813-.013.035-.395-.791-.825.375 2.164-5.848.825-.375.395.791h.001zm5.385.137l-2.151 5.822-.395-.793-.825.374.05-.136 2.15-5.82.825-.375.394.791-.048.137zm-4.605 5.034l1.267-3.422-.827.375-.393-.792-1.271 3.421.394.793.83-.374zm-6.853-3.374H4.918l.646.6-.646.61h3.78l.643-.61-.639-.6zm-4.307 2.537h6.116l-.643.605.643.604H4.395l-.645-.604.645-.606zm1.876-5.076h6.112l-.64.606.641.604H6.271l-.644-.605.644-.605z",
      fill: "white"
    })
  );
};

exports.default = SvgExmo;