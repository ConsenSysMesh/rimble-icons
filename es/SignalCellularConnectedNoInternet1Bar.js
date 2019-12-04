var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var SignalCellularConnectedNoInternet1BarIcon = function SignalCellularConnectedNoInternet1BarIcon(_ref) {
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
    React.createElement('path', { d: 'M22 8V2L2 22h16V8z M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z' })
  );
};

SignalCellularConnectedNoInternet1BarIcon.displayName = 'SignalCellularConnectedNoInternet1BarIcon';

SignalCellularConnectedNoInternet1BarIcon.defaultProps = {
  size: 24
};

export default SignalCellularConnectedNoInternet1BarIcon;