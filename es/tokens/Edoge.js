function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgEdoge = React.forwardRef(function (props, ref) {
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
    d: "M7.103 6.762h4.074c1.616 0 2.418-.051 3.623.06 1.205.127 2.41.619 3.19 1.561.919 1.095 1.188 2.573 1.127 3.948-.06 1.367-.529 2.801-1.604 3.735-.953.858-2.287 1.172-3.553 1.18-2.462.009-4.915 0-7.376 0-.269-.017-.573.009-.78-.178-.364-.365-.147-1.146.433-1.113 1.37-.041 2.747 0 4.117-.025-.026-1.154-.008-2.309-.008-3.454-1.058-.01-2.107 0-3.164 0-.235-.01-.495-.01-.676-.163-.217-.195-.217-.525-.122-.78.122-.28.45-.331.728-.331 1.075-.009 2.159 0 3.233 0 .018-1.053-.017-2.106.018-3.15-1.205-.008-2.41 0-3.615 0-.269-.008-.572-.008-.78-.195-.216-.28-.173-.68.009-.96.346-.17.745-.135 1.126-.135zm4.75 4.44c.494.008.989-.034 1.483.034.59.084.59 1.12-.01 1.205-.485.076-.987.025-1.481.034.009 1.002 0 1.995 0 2.997.009.17.017.424.234.442.59.05 1.102.033 1.768.033.988.043 2.028-.262 2.721-.984.711-.756.971-1.808.989-2.81.026-1.112-.182-2.335-.998-3.167-.736-.747-1.845-1.002-2.877-.942-.588 0-1.092-.018-1.638.033-.173.051-.182.264-.19.417V11.202z",
    fill: "white"
  }));
});
SvgEdoge.displayName = "SvgEdoge";
SvgEdoge.defaultProps = {
  size: 24,
  color: "#0FACF3"
};
export default SvgEdoge;