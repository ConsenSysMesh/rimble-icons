var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var ImageAspectRatioIcon = function ImageAspectRatioIcon(_ref) {
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
    React.createElement('path', { d: 'M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z' })
  );
};

ImageAspectRatioIcon.displayName = 'ImageAspectRatioIcon';

ImageAspectRatioIcon.defaultProps = {
  size: 24
};

export default ImageAspectRatioIcon;