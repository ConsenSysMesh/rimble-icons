function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgHpb = React.forwardRef(function (props, ref) {
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
    d: "M12.429 11.454s.995-2.212-.956-4.35c0 0-1.11-1.425-3.405-1.312l.458-.18c.076-.03.157-.051.238-.062l.451-.058 3.176-.488s1.123-.22 1.974.023c.242.07.463.2.637.379.47.476 1.412 1.733.795 3.723 0 0-.613 2.213-2.908 2.738 0 0-.575.15-.46-.413zm-.142 1.233s1.435 1.967 4.307 1.413c0 0 1.816-.21 2.888-2.203l-.076.48a.962.962 0 01-.068.231l-.178.41-1.192 2.925s-.378 1.059-1.026 1.653c-.185.169-.412.288-.657.344-.656.152-2.24.306-3.673-1.229 0 0-1.63-1.643-.92-3.847 0-.002.16-.56.595-.177zm-1.039-.71s-2.452.258-3.37 2.981c0 0-.709 1.653.535 3.548l-.388-.3a.975.975 0 01-.173-.172l-.277-.354-2.013-2.455s-.755-.845-.963-1.688a1.4 1.4 0 01.016-.733c.187-.635.83-2.063 2.898-2.529 0 0 2.262-.583 3.871 1.107.002 0 .42.412-.135.595z",
    fill: "white"
  }), React.createElement("path", {
    opacity: 0.5,
    d: "M12.83 12.12s2.444-.319 3.292-3.064c0 0 .665-1.67-.628-3.534l.396.29c.066.05.125.106.177.168l.286.346 2.077 2.405s.776.825 1.007 1.663c.065.24.065.492 0 .732-.17.64-.776 2.084-2.831 2.601 0 0-2.247.638-3.899-1.01.002 0-.427-.401.122-.598zm-1.229.452s-1.05 2.187.845 4.372c0 0 1.072 1.451 3.372 1.395l-.464.169a1.013 1.013 0 01-.24.055l-.452.047-3.187.41s-1.127.193-1.973-.071a1.464 1.464 0 01-.627-.396c-.458-.487-1.367-1.767-.7-3.74 0 0 .668-2.197 2.977-2.665 0 .002.58-.135.449.424zm.082-1.152s-1.464-1.947-4.327-1.35c0 0-1.813.233-2.856 2.242l.069-.48a.974.974 0 01.064-.233l.173-.413 1.147-2.943s.364-1.063 1.002-1.666c.185-.172.41-.293.654-.352.655-.163 2.237-.337 3.69 1.177 0 0 1.654 1.62.977 3.834 0-.002-.153.56-.593.183z",
    fill: "white"
  }));
});
SvgHpb.displayName = "SvgHpb";
SvgHpb.defaultProps = {
  size: 24,
  color: "#1591CA"
};
export default SvgHpb;