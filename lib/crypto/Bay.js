"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBay = function SvgBay(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#6356AB",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M17.088 11.98c.043-.048.092-.097.141-.146.158-.17.33-.35.493-.525a3.656 3.656 0 001.017-2.527c0-.066.011-.334.011-.372-.076-2.154-1.89-3.91-4.033-3.91h-6.75v2.723H5.25V19.5h9.575c2.128 0 3.925-1.892 3.925-4.134.005-1.603-.985-2.734-1.662-3.386zM9.32 8.59l5.375.006-3.377 3.424 3.34 3.39H9.32V8.59zm5.505 9.538H6.603V8.585h1.365v8.186h6.69c.552 0 1.045-.333 1.256-.847a1.373 1.373 0 00-.293-1.493l-2.386-2.417 2.424-2.456c.39-.394.504-.979.293-1.492a1.356 1.356 0 00-1.257-.848h-5.37V5.862h5.398c1.429 0 2.63 1.165 2.68 2.58 0 .06-.012.296-.012.301v.027a2.29 2.29 0 01-.643 1.592c-.169.175-.342.36-.498.525-.266.279-.493.52-.602.63l-.487.48.482.488c.065.065.146.141.243.234.563.525 1.511 1.4 1.511 2.636.005 1.476-1.196 2.773-2.572 2.773z",
      fill: "white"
    })
  );
};

exports.default = SvgBay;