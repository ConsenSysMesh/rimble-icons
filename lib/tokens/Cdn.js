"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgCdn = function SvgCdn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#F70808",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M12 4.5l-1.245 2.262c-.141.246-.394.224-.647.086l-.9-.455.67 3.475c.142.635-.311.635-.535.36L7.77 8.512l-.255.872c-.03.115-.159.235-.353.206l-1.988-.408.521 1.851c.113.412.2.582-.112.69l-.709.326 3.422 2.709a.43.43 0 01.156.454l-.3.958c1.18-.133 2.236-.332 3.415-.455.104-.01.278.157.277.275l-.155 3.51h.573l-.09-3.502c-.001-.118.157-.293.26-.282 1.18.123 2.236.322 3.414.454l-.3-.959a.43.43 0 01.157-.453l3.422-2.71-.709-.324c-.312-.109-.225-.279-.112-.69l.522-1.852-1.989.408c-.194.029-.323-.091-.352-.206l-.256-.872-1.572 1.716c-.224.275-.677.275-.535-.36l.671-3.475-.9.455c-.254.138-.507.16-.648-.086L12 4.5z",
      fill: "white"
    })
  );
};

exports.default = SvgCdn;