"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgRlc = function SvgRlc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#FFD800",
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
      d: "M17.762 9.665c.043-.043.128-.043.211-.043 1.265 0 2.277 1.07 2.277 2.357 0 1.2-.885 2.143-2.023 2.357h-.254c-.421 0-.843-.129-1.223-.343a.705.705 0 00-.421-.129.839.839 0 00-.463.129c-.296.171-.422.471-.422.814v.386a2.31 2.31 0 01-2.024 2.1h-.253c-.421 0-.843-.128-1.223-.343a.95.95 0 00-.463-.128.843.843 0 00-.464.128c-.295.172-.422.472-.422.815v.385c-.084 1.115-.97 1.972-2.065 2.1h-.211c-1.265 0-2.277-1.072-2.277-2.357.042-1.2.885-2.186 2.024-2.315h.253c.421 0 .843.13 1.222.344.124.087.271.131.422.128a.839.839 0 00.464-.128c.295-.172.421-.472.421-.815-.084-1.242.802-2.357 2.024-2.485h.253c.421 0 .843.128 1.223.342a.953.953 0 00.464.129.84.84 0 00.463-.129c.295-.171.422-.471.422-.814-.084-1.243.843-2.357 2.065-2.486zm-4.847-2.958c.084-.042.127-.042.253-.042 1.265 0 2.277 1.07 2.277 2.357-.042 1.2-.885 2.185-2.024 2.313h-.253c-.422 0-.843-.128-1.223-.342a.705.705 0 00-.421-.129.839.839 0 00-.464.129c-.295.171-.422.471-.422.814v.386c-.084 1.114-.969 1.97-2.066 2.1h-.21c-1.265 0-2.277-1.071-2.277-2.357 0-1.157.843-2.1 1.981-2.271h.254c.421 0 .843.128 1.222.342.123.087.271.132.422.129a.839.839 0 00.463-.129c.296-.171.422-.471.422-.814-.084-1.243.844-2.357 2.066-2.486zM8.277 3.75c1.257 0 2.276 1.037 2.276 2.314 0 1.279-1.02 2.314-2.276 2.314C7.019 8.378 6 7.343 6 6.064 6 4.787 7.02 3.75 8.277 3.75z",
      fill: "white"
    })
  );
};

exports.default = SvgRlc;