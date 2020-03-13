function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgXcp = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size,
    ref: ref
  }), React.createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.61 7.5h-3.033a.462.462 0 00-.33.14l-5.531 5.646a.463.463 0 01-.33.14H7.372a.463.463 0 01-.33-.14l-.717-.73a.479.479 0 01-.138-.335v-1.033a.48.48 0 01.138-.336l.717-.73a.46.46 0 01.33-.14h1.014c.123 0 .242.05.33.14l.44.448a.461.461 0 00.66 0l1.064-1.083a.482.482 0 000-.672L9.725 7.64a.463.463 0 00-.33-.14H6.362a.463.463 0 00-.33.14L3.887 9.822a.48.48 0 00-.136.336v3.089c0 .126.05.248.136.336l2.145 2.185a.463.463 0 00.33.139h3.034a.465.465 0 00.33-.14l5.531-5.646a.463.463 0 01.33-.14h1.014c.124 0 .242.05.33.14l.717.73a.48.48 0 01.137.336v1.032a.48.48 0 01-.137.336l-.717.73a.462.462 0 01-.33.14h-1.014a.462.462 0 01-.33-.14l-.444-.452a.46.46 0 00-.656-.004l-1.313 1.307a.478.478 0 00-.14.34v3.03c0 .262.21.475.467.475h1.53a.471.471 0 00.467-.475v-1.125a.47.47 0 01.466-.475h1.977a.462.462 0 00.33-.138l2.145-2.185a.48.48 0 00.137-.336V10.16a.48.48 0 00-.136-.337L17.942 7.64a.463.463 0 00-.33-.139",
    fill: "white"
  }));
});
SvgXcp.displayName = "SvgXcp";
SvgXcp.defaultProps = {
  size: 24,
  color: "#ED1650"
};
export default SvgXcp;