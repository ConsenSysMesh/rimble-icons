function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgBix = React.forwardRef(function (props, ref) {
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
    d: "M12.706 18.433c.039.091.06.191.06.296a.777.777 0 01-.784.771.777.777 0 01-.784-.771c0-.102.02-.2.057-.289l-4.657-2.645a.786.786 0 01-.564.236.777.777 0 01-.784-.771c0-.36.25-.662.588-.748v-5.27a.774.774 0 01-.588-.747c0-.426.351-.77.784-.77.26 0 .49.124.633.316l4.554-2.588a.73.73 0 01-.023-.182c0-.426.352-.771.784-.771a.778.778 0 01.763.949l4.58 2.602a.787.787 0 01.641-.327c.433 0 .784.345.784.771 0 .36-.251.663-.59.748l-.014 5.265c.346.08.604.386.604.752a.777.777 0 01-.784.77.788.788 0 01-.582-.255l-4.678 2.658zm-.21-.285l4.716-2.68a.76.76 0 01.015-.466l-4.549-2.925a.931.931 0 01-1.412-.065l-4.483 3.02a.76.76 0 01-.003.462l4.681 2.659a.788.788 0 01.521-.195c.197 0 .377.071.514.189zm.09-12.385a.788.788 0 01-.41.255l-.012 4.542a.915.915 0 01.762.897.887.887 0 01-.06.322l4.553 2.928a.782.782 0 01.371-.199l.014-5.258a.775.775 0 01-.612-.87l-4.606-2.617zm-1.204.004L6.806 8.366a.775.775 0 01-.612.884v5.254c.16.033.3.113.408.225l4.504-3.034a.916.916 0 01.701-1.129l.012-4.54a.785.785 0 01-.437-.26z",
    fill: "white"
  }));
});
SvgBix.displayName = "SvgBix";
SvgBix.defaultProps = {
  size: 24,
  color: "black"
};
export default SvgBix;