var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var ChevronRightIcon = function ChevronRightIcon(_ref) {
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
    React.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' })
  );
};

ChevronRightIcon.displayName = 'ChevronRightIcon';

ChevronRightIcon.defaultProps = {
  size: 24
};

export default ChevronRightIcon;