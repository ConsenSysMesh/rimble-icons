var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var BusinessCenterIcon = function BusinessCenterIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentcolor'
    }),
    React.createElement('path', { d: 'M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z' })
  );
};

BusinessCenterIcon.displayName = 'BusinessCenterIcon';

BusinessCenterIcon.defaultProps = {
  size: 24
};

export default BusinessCenterIcon;