"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("./tokens/index");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

var _index2 = require("./md/index");

Object.keys(_index2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index2[key];
    }
  });
});

var _Icon = require("./Icon");

Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Icon)["default"];
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }