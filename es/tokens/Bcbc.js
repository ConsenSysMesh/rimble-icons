function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgBcbc = React.forwardRef(function (props, ref) {
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
    d: "M9.362 5.845a6.566 6.566 0 108.063 9.32l-5.747-3.176L14.01 5.85a6.566 6.566 0 00-4.647-.005zm.41 1.18a5.317 5.317 0 013.763.004l-1.887 4.97 4.652 2.573a5.316 5.316 0 11-6.528-7.548zm2.202-3.29a8.27 8.27 0 012.61.532L11.648 12 18.886 16a8.27 8.27 0 11-6.912-12.265zm5.646 2.859c.198 0 .383.023.552.071.5.137.837.448 1.013.931.107.293.13.581.07.864a1.54 1.54 0 01-.389.757 1.68 1.68 0 011.013.257c.287.181.5.46.635.833.193.53.135 1.013-.175 1.451-.306.431-.852.79-1.64 1.077l-3.124 1.137-2.198-6.04 2.95-1.074c.483-.176.915-.264 1.293-.264zm-.457 1.25c-.18 0-.388.043-.625.13l-1.389.505.518 1.424 1.39-.506c.345-.126.585-.28.718-.467.135-.186.159-.397.073-.632-.086-.236-.239-.379-.46-.429a.916.916 0 00-.225-.026zm1.171 2.341c-.189.002-.41.05-.665.143l-1.631.593.543 1.492 1.63-.593c.368-.134.623-.295.763-.483.146-.19.172-.411.08-.665-.12-.327-.36-.49-.72-.487z",
    fill: "white"
  }));
});
SvgBcbc.displayName = "SvgBcbc";
SvgBcbc.defaultProps = {
  size: 24,
  color: "#004AB5"
};
export default SvgBcbc;