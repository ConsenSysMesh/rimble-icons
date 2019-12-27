"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("./tokens/index");

var tokenIcons = _interopRequireWildcard(_index);

var _index2 = require("./md/index");

var mdIcons = _interopRequireWildcard(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  if (tokenIcons[name]) {
    var Component = tokenIcons[name];
    return _react2.default.createElement(Component, props);
  } else if (mdIcons[name]) {
    var _Component = mdIcons[name];
    return _react2.default.createElement(_Component, props);
  } else {
    return false;
  }
};

Icon.displayName = "Icon";

exports.default = Icon;