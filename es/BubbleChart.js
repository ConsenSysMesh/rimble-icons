var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var BubbleChartIcon = function BubbleChartIcon(_ref) {
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
    React.createElement('path', { d: 'M 7.2 11.2 A 3.2 3.2 0 0 0 7.2 17.6 A 3.2 3.2 0 0 0 7.2 11.2 M 14.8 16 A 2 2 0 0 1 14.8 20 A 2 2 0 0 1 14.8 16 M 15.2 4.000000000000001 A 4.8 4.8 0 0 0 15.2 13.600000000000001 A 4.8 4.8 0 0 0 15.2 4.000000000000001' })
  );
};

BubbleChartIcon.displayName = 'BubbleChartIcon';

BubbleChartIcon.defaultProps = {
  size: 24
};

export default BubbleChartIcon;