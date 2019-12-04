var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var SentimentNeutralIcon = function SentimentNeutralIcon(_ref) {
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
    React.createElement('path', { d: 'M9 14h6v1.5H9z M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z M 15.5 8 A 1.5 1.5 0 0 0 15.5 11 A 1.5 1.5 0 0 0 15.5 8 M 8.5 8 A 1.5 1.5 0 0 1 8.5 11 A 1.5 1.5 0 0 1 8.5 8' })
  );
};

SentimentNeutralIcon.displayName = 'SentimentNeutralIcon';

SentimentNeutralIcon.defaultProps = {
  size: 24
};

export default SentimentNeutralIcon;