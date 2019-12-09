"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgArn = function SvgArn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#0092B5",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M8.82 10.576l3.211-5.653c.006-.01.018-.017.06 0l3.056 5.55a.731.731 0 00.019 1.15l-2.822 5.09a.756.756 0 00-.646-.004l-2.904-5.174a.728.728 0 00.025-.959h.001zm-.308 1.151l2.916 5.194a.73.73 0 00-.135.267c-2.354-.564-3.816-.913-4.388-1.047a7.165 7.165 0 01-.634-1.079l1.87-3.29c.125.017.253.001.371-.044v-.001zm-.404-1.412L5.793 6.19c1.578-.838 3.536-1.278 5.876-1.315L8.548 10.37a.756.756 0 00-.44-.055zm-.315.132a.733.733 0 00.026 1.206L6.1 14.675A7.098 7.098 0 015.6 12.46L5.25 6.923a.667.667 0 01.25-.56l2.292 4.084zm4.95 6.748a.73.73 0 00-.131-.266l2.864-5.165a.765.765 0 00.371-.018l1.856 3.37a7.297 7.297 0 01-.543.934l-4.417 1.145zm-.556.9a.745.745 0 00.56-.554l4.093-1.061a7.243 7.243 0 01-1.752 1.569l-2.717 1.735a.684.684 0 01-.184.083v-1.772zm-.34 0v1.78a.686.686 0 01-.217-.09l-2.718-1.736a7.25 7.25 0 01-1.684-1.487c.742.176 2.095.499 4.056.968.06.28.281.502.563.566zm4.027-7.75a.757.757 0 00-.423-.021l-2.997-5.447c2.274.05 4.185.485 5.73 1.301l-2.31 4.167zm.288.18l2.317-4.179a.668.668 0 01.27.577l-.347 5.537a7.097 7.097 0 01-.525 2.27l-1.735-3.153a.732.732 0 00.02-1.052zM12 8.425a.412.412 0 00-.406.401v1.465L9.43 11.625l.232.5 1.932-.633v1.466l-.541.4v.4L12 13.49l.947.267v-.4l-.541-.4v-1.466l1.9.668.264-.534-2.164-1.334V8.826a.412.412 0 00-.405-.4H12z",
      fill: "white"
    })
  );
};

exports.default = SvgArn;