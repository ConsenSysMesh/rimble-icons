function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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