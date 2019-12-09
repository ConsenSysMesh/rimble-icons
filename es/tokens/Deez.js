var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgDeez = function SvgDeez(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#939393",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.28 14.895a538.68 538.68 0 013.906-2.403c1.293-.79 1.293-.79 1.27-.868-.022-.094-8.025-4.957-8.107-5.005-.2-.12-.356-.215-.451-.277.147-.102.433-.297.775-.53l.832-.562.571.342c.705.421 8.445 5.169 9.53 5.845-.443.266-2.01 1.194-4.118 2.435l-4.187 2.468a27.023 27.023 0 01-.015-.656 34.86 34.86 0 01-.005-.788v-.001zm-1.776-4.722c.139.082.379.227.675.411l.771.479.017 1.447c.048 4.183.048 4.183.11 4.225l.04.028.045-.016c.022-.007.03-.01 8.153-4.802l.435-.256-.143 2.012-.053.03c-.311.185-8.851 5.073-10.041 5.748-.004-.524-.008-2.314-.009-4.647v-4.659zM6.75 18.6l.019-11.975.29.171c.235.137 1.813 1.1 3.596 2.19 1.748 1.07 3.469 2.12 3.835 2.338l.536.323-1.773 1.084-.354-.206c-.221-.13-1.173-.713-2.122-1.299-.688-.426-1.378-.848-2.07-1.266l-.49-.285-.003 5.077-.005 4.749c-.145-.088-.392-.24-.681-.42L6.75 18.6z",
      fill: "white"
    })
  );
};

export default SvgDeez;