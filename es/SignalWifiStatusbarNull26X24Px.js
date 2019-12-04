var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var SignalWifiStatusbarNull26X24PxIcon = function SignalWifiStatusbarNull26X24PxIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: '0 0 26 24',
      width: size,
      height: size,
      fill: 'currentcolor'
    }),
    React.createElement('path', { d: 'M13 4c4.25 0 7.62 1.51 9.68 2.75L13 18.8 3.33 6.75C5.38 5.51 8.75 4 13 4m0-2C5.74 2 .9 5.96.42 6.32l12.57 15.66.01.02.01-.01L25.58 6.32C25.1 5.96 20.26 2 13 2z' })
  );
};

SignalWifiStatusbarNull26X24PxIcon.displayName = 'SignalWifiStatusbarNull26X24PxIcon';

SignalWifiStatusbarNull26X24PxIcon.defaultProps = {
  size: 24
};

export default SignalWifiStatusbarNull26X24PxIcon;