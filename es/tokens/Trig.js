function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgTrig = React.forwardRef(function (props, ref) {
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
    d: "M7.592 5.25h8.83s.235 1.165 1.486 1.244c0 0 4.141 9.637-5.94 13.756 0 0-9.299-2.953-6.017-13.678 0 0 1.407-.079 1.641-1.322zm8.363.767h-7.89l-.01.168c-.067.367-.25.623-.52.795a1.418 1.418 0 01-.549.204l-.138.013-.039.133c-.727 2.483-.751 4.628-.179 6.458.47 1.5 1.32 2.73 2.439 3.712a9.36 9.36 0 001.946 1.315 8.141 8.141 0 00.896.386l.073.023.072-.03c2.779-1.188 4.46-2.983 5.214-5.22.622-1.845.567-3.81.102-5.67a10.657 10.657 0 00-.354-1.136l-.048-.118-.128-.008c-.364-.024-.596-.173-.74-.411a1.026 1.026 0 01-.138-.42l-.01-.194zm-7.534.409c4.775 0 7.163.002 7.163.002.033.14.086.28.165.413.191.319.5.534.932.595.113.318.21.64.292.968.447 1.79.5 3.68-.093 5.44-.71 2.106-2.285 3.8-4.914 4.943a7.64 7.64 0 01-.764-.337 8.953 8.953 0 01-1.86-1.255c-1.067-.936-1.874-2.104-2.319-3.528-.539-1.721-.524-3.745.145-6.1.209-.048.408-.13.59-.243.326-.205.563-.526.663-.898zm5.52 4.187h-.227c.022-.457-.079-1.45-1.313-1.726a1.959 1.959 0 00-1.083.05c-.481.171-1.056.6-1.077 1.676h-.168a.645.645 0 00-.645.64v2.682a.645.645 0 00.645.641h3.869a.645.645 0 00.645-.641v-2.681a.645.645 0 00-.645-.641h-.001zm-1.504 3.031h-.86l.228-1.13a.504.504 0 01.203-.968.505.505 0 11.202.968l.227 1.13zm-1.64-3.031c.02-.351.169-1.182 1.093-1.244 0 0 1.22-.067 1.198 1.244h-2.292z",
    fill: "white"
  }));
});
SvgTrig.displayName = "SvgTrig";
SvgTrig.defaultProps = {
  size: 24,
  color: "#30C0F2"
};
export default SvgTrig;