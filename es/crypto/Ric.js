var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgRic = function SvgRic(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#60E4DD",
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
      d: "M7.608 15.018c.225-.341.438-.66.639-.96H5.949a.07.07 0 01-.07-.07v-.477a.07.07 0 01.07-.07h2.716c1.453-2.121 2.18-2.995 2.18-3.084 0-.137-.03-.206-.526-.206-.978 0-2.587-.698-2.587-2.604 0-1.038 1.678-2.297 2.658-2.297.454 0 .524.193.315.205-.56.035-1.784 1.152-1.784 2.228 0 .72.64 1.954 2.063 1.954 1.681 0 3.117-2.673 6.609-2.673 2.098 0 2.657 1.64 2.657 2.09 0 .45-.655.686-1.538.686-.884 0-.917-1.577-2.693-1.577-2.788 0-5.163 3.02-6.303 5.278h1.968a.07.07 0 01.07.07v.477a.071.071 0 01-.02.05.072.072 0 01-.05.02H9.425a7.02 7.02 0 00-.345.96h1.973c.038 0 .07.03.07.07v.478a.07.07 0 01-.07.07H8.992c.037.874.77 1.662 2.202 2.364h-5.49c.493-.793.993-1.582 1.5-2.365H5.322a.07.07 0 01-.07-.07v-.477a.07.07 0 01.069-.07h2.288z",
      fill: "white"
    })
  );
};

export default SvgRic;