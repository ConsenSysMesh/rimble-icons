var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var SignalWifiStatusbar2Bar26X24PxIcon = function SignalWifiStatusbar2Bar26X24PxIcon(_ref) {
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
    React.createElement('path', { d: 'M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z M13.01 21.99l7.54-9.4C20.26 12.38 17.36 10 13 10c-4.36 0-7.26 2.38-7.55 2.59l7.54 9.4h.02z' })
  );
};

SignalWifiStatusbar2Bar26X24PxIcon.displayName = 'SignalWifiStatusbar2Bar26X24PxIcon';

SignalWifiStatusbar2Bar26X24PxIcon.defaultProps = {
  size: 24
};

export default SignalWifiStatusbar2Bar26X24PxIcon;