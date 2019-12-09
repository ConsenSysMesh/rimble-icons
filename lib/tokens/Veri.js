"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgVeri = function SvgVeri(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#FF9933",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M4.5 6c.828.002 1.657.002 2.484 0l1.568 8.385c.025.124.055.246.087.367.123-.487.2-.985.303-1.477L10.37 6h2.403c-.881 3.925-1.762 7.85-2.645 11.773H7.145L4.5 6.008V6zm9.236 3.699c.522-.657 1.358-.955 2.163-1.007.795-.056 1.652.016 2.325.49.596.417.924 1.122 1.079 1.823.188.88.198 1.782.197 2.678h-4.402c.003.662-.038 1.345.183 1.98.107.312.308.622.626.736.339.11.747.038.994-.235.33-.374.4-.897.471-1.376h1.998c-.045.795-.192 1.635-.712 2.26-.522.649-1.364.915-2.16.947-.866.033-1.806-.085-2.496-.668-.64-.535-.92-1.382-1.032-2.194a16.333 16.333 0 01-.065-2.822c.07-.916.236-1.887.83-2.613V9.7zm1.705.934c-.34.49-.35 1.122-.344 1.7h2.275c-.036-.55-.032-1.13-.28-1.633-.307-.621-1.279-.624-1.65-.066h-.001v-.001z",
      fill: "white"
    })
  );
};

exports.default = SvgVeri;