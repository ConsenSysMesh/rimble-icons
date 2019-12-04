function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import * as Icons from './index';

var Icon = function Icon(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ['name']);

  var Component = Icons[name];
  if (!Component) return false;
  return React.createElement(Component, props);
};

Icon.displayName = 'Icon';

export default Icon;