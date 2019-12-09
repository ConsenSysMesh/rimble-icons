"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgGto = function SvgGto(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#7F27FF",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M11.532 10.5H6.015v5.416a2.041 2.041 0 00.615 1.48c.399.391.943.61 1.507.604h3.396l-.001-7.5zm.127-2.834h.595c.588-1.013 1.126-1.701 1.632-2.073.624-.46 1.263-.464 1.764.028.468.46.556 1.035.248 1.59a2.21 2.21 0 01-.348.455h2.181c.51 0 1.019.418 1.019 1 0 .5-.427 1-1.018 1H12.38V8.332h-.849v1.334H6.269c-.509 0-1.019-.419-1.019-1 0-.5.427-1 1.019-1h2.204a2.471 2.471 0 01-.366-.43c-.365-.557-.32-1.147.156-1.615.5-.492 1.14-.487 1.764-.028.506.372 1.045 1.061 1.633 2.073zm-.986 0c-.435-.693-.823-1.163-1.155-1.407-.307-.225-.475-.226-.655-.049-.185.182-.197.338-.041.575.177.271.55.576 1.086.88h.765zm2.567 0h.915c.512-.294.85-.591.997-.855.128-.228.1-.402-.102-.6-.18-.178-.349-.177-.655.048-.332.244-.721.714-1.154 1.407h-.001zm-.859 2.833h5.518v5.417a2.042 2.042 0 01-.615 1.48c-.403.393-.945.61-1.508.604h-3.395v-7.5z",
      fill: "white"
    })
  );
};

exports.default = SvgGto;