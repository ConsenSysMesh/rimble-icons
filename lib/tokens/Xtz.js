"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgXtz = function SvgXtz(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#A6E000",
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
      d: "M13.643 19.5c-1.096 0-1.894-.258-2.395-.773-.5-.515-.75-1.071-.75-1.667 0-.217.043-.401.131-.55a.953.953 0 01.358-.352c.151-.085.337-.129.559-.129.22 0 .408.044.559.129.152.086.27.203.358.352.088.149.131.333.131.55 0 .264-.064.478-.192.645a.888.888 0 01-.454.326c.151.206.39.352.716.438.326.092.652.138.978.138.437.005.866-.12 1.232-.361.367-.24.637-.596.811-1.065.175-.47.263-1.003.263-1.598 0-.648-.096-1.2-.288-1.659-.187-.464-.463-.807-.83-1.03a2.243 2.243 0 00-1.188-.335c-.28 0-.629.114-1.048.343l-.769.378v-.378l3.46-4.536h-4.787v4.708c0 .39.087.71.262.962.174.252.443.378.803.378.28 0 .547-.091.804-.275.257-.184.481-.41.663-.67a.257.257 0 01.088-.112.178.178 0 01.114-.042c.064 0 .139.031.227.094.08.086.123.2.122.317a2.18 2.18 0 01-.043.241c-.199.435-.473.768-.822.997a2.06 2.06 0 01-1.152.343c-1.037 0-1.753-.2-2.15-.601-.395-.4-.593-.945-.593-1.632V8.366H6.375V7.49H8.82V5.497l-.558-.55V4.5h1.624l.612.309v2.68l6.323-.017.63.619-3.879 3.815c.235-.093.482-.151.734-.173.42 0 .89.132 1.415.396.53.257.937.613 1.222 1.065.286.447.47.877.55 1.29.082.36.126.729.132 1.099.006.709-.156 1.41-.472 2.044a3.027 3.027 0 01-1.432 1.409c-.649.31-1.36.47-2.079.464z",
      fill: "white"
    })
  );
};

exports.default = SvgXtz;