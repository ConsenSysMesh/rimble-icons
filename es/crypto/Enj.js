var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgEnj = function SvgEnj(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#624DBF",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M16.735 6.75c.37.043.745.066 1.111.132.726.137.962.482.84 1.182-.05.284-.233.458-.524.505a3.84 3.84 0 01-.523.038c-2.38.005-4.765.01-7.145.02-.36 0-.716.032-1.066.09-1.181.184-1.625.652-1.724 1.79-.045.535-.045.535.514.535h9.77a.847.847 0 01.43.113c.436.265.327.68.302 1.064-.02.308-.212.477-.543.539-.139.02-.28.03-.42.028H8.014c-.36 0-.354 0-.325.34.025.313.045.62.124.922.147.563.508.912 1.091 1.068.646.175 1.313.213 1.98.218 2.325.014 4.646.01 6.972.01.296 0 .572.037.745.297.337.501.075 1.2-.513 1.38-.504.156-1.032.194-1.556.199-2.182.038-4.365.043-6.547 0a11.93 11.93 0 01-2.004-.222c-1.556-.308-2.331-1.064-2.593-2.558-.06-.345-.094-.694-.138-1.04v-2.727c.03-.27.054-.538.09-.803.206-1.693.997-2.524 2.735-2.893.617-.133 1.248-.161 1.87-.223 2.258-.004 4.522-.004 6.79-.004z",
      fill: "white"
    })
  );
};

export default SvgEnj;