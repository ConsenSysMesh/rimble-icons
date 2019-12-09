var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgData = function SvgData(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#E9570F",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M18.105 7.436L19.31 6.24c.285-.282.226-.798-.13-1.151-.357-.354-.878-.412-1.162-.13l-2.262 2.243-.077.078-1.971 1.953a3.42 3.42 0 00-4.4.338 3.348 3.348 0 00-.341 4.363l-1.505 1.492a5.883 5.883 0 01-.891-1.72c-.505-1.528-.37-3.202.45-4.582 1.277-2.153 3.562-3.089 5.728-2.814a.803.803 0 00.912-.74.98.98 0 00-.88-1.03 7.528 7.528 0 00-6.087 2.134C3.942 9.403 3.781 13.731 6.2 16.678l-1.38 1.369c-.272.27-.204.776.153 1.129.356.353.866.422 1.138.152l1.486-1.473 1.075-1.066.002-.003 1.742-1.726a3.419 3.419 0 003.69-.732 3.348 3.348 0 00.738-3.66l1.976-1.957c1.448 2.18 1.16 5.2-.833 7.175a5.914 5.914 0 01-4.597 1.71.733.733 0 00-.773.666l-.02.24a.778.778 0 00.742.847 7.73 7.73 0 005.874-2.247c2.698-2.675 3.01-6.796.893-9.667zm-5.25 5.65a1.635 1.635 0 01-2.296 0 1.603 1.603 0 010-2.274 1.634 1.634 0 012.295 0 1.6 1.6 0 010 2.275z",
      fill: "white"
    })
  );
};

export default SvgData;