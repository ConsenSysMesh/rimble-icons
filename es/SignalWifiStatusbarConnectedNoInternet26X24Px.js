var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var SignalWifiStatusbarConnectedNoInternet26X24PxIcon = function SignalWifiStatusbarConnectedNoInternet26X24PxIcon(_ref) {
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
    React.createElement('path', { d: 'M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z M22 22h2v-2h-2v2zm0-12v8h2v-8h-2z' })
  );
};

SignalWifiStatusbarConnectedNoInternet26X24PxIcon.displayName = 'SignalWifiStatusbarConnectedNoInternet26X24PxIcon';

SignalWifiStatusbarConnectedNoInternet26X24PxIcon.defaultProps = {
  size: 24
};

export default SignalWifiStatusbarConnectedNoInternet26X24PxIcon;