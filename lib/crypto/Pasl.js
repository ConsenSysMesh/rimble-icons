"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPasl = function SvgPasl(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#00ACFF",
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
      d: "M11.31 15.117a.383.383 0 01.501.21.386.386 0 01-.208.502L9.05 16.89l-.34 1.86H6.953l.192-1.07-1.036.43a.383.383 0 01-.5-.503.386.386 0 01.207-.209l1.492-.619.113-.63-2.016.837a.382.382 0 01-.5-.21.386.386 0 01.208-.503l2.47-1.025 1.798-9.99h5.08c3.11-.108 4.665.931 4.665 3.116 0 2.771-2.026 4.915-5.464 4.915H9.705l-.212 1.167 1.115-.463a.382.382 0 01.5.209.386.386 0 01-.208.502l-1.572.654-.115.63 2.097-.871zm-.428-8.285l-.878 4.818h3.913c2.409 0 3.322-1.638 3.322-2.827 0-1.188-.574-1.991-2.491-1.991h-3.865z",
      fill: "white"
    })
  );
};

exports.default = SvgPasl;