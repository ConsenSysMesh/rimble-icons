"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgXem = function SvgXem(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#67B2E8",
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
      d: "M4.609 8.966A14.873 14.873 0 014.5 7.227a15.165 15.165 0 017.81-1.974c.427.008 1.043.056 1.511.106a4.504 4.504 0 00-2.377 3.883 4.09 4.09 0 01-.135 1.015 3.398 3.398 0 01-6.351.504 1.106 1.106 0 01-.075-.225 15.128 15.128 0 01-.274-1.57zm12.46 6.42c-.179.277-.368.547-.564.813a4.423 4.423 0 00-.548-2.167 4.449 4.449 0 00-1.61-1.697l-.067-.042a5.706 5.706 0 01-.112-.067c-.852-.543-1.372-1.302-1.555-2.281a3.389 3.389 0 012.537-3.914 3.358 3.358 0 011.828.062c.464.146.933.338 1.506.605.33.156.663.328 1.017.528a15.08 15.08 0 01-.34 3.111 15.109 15.109 0 01-2.092 5.049zM14.79 18.14A15.39 15.39 0 0112 20.25a15.282 15.282 0 01-6.229-7.02 4.412 4.412 0 001.815.588 4.52 4.52 0 002.71-.58c.395-.224.83-.37 1.28-.426a3.39 3.39 0 013.677 2.404c.25.84.177 1.667-.213 2.48-.033.07-.061.125-.129.257l-.033.066a.438.438 0 01-.088.121z",
      fill: "white"
    })
  );
};

exports.default = SvgXem;