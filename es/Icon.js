function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import * as tokenIcons from "./tokens/index";
import * as mdIcons from "./md/index";

var Icon = function Icon(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  if (tokenIcons[name]) {
    var Component = tokenIcons[name];
    return React.createElement(Component, props);
  } else if (mdIcons[name]) {
    var _Component = mdIcons[name];
    return React.createElement(_Component, props);
  } else {
    return false;
  }
};

Icon.displayName = "Icon";

export default Icon;