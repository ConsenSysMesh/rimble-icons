var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSbd = function SvgSbd(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#4BA2F2",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M7.402 6.172c.162.028-.241 1.102-.016 2.33.195 1.052 2.63 5.127 2.53 6.525-.078.878-2.078 2.936-2.288 2.799-.23-.064.607-1.463.296-2.628-.361-1.359-2.505-4.872-2.502-6.423 0-1.135 1.836-2.677 1.98-2.603zm4.582-1.605c.206.035-.307 1.407-.02 2.969.247 1.344 3.354 6.54 3.225 8.321-.1 1.12-2.649 3.744-2.919 3.57-.293-.08.776-1.864.38-3.35-.46-1.732-3.194-6.212-3.192-8.19 0-1.448 2.342-3.412 2.526-3.32zm4.729 1.605c.162.028-.24 1.102-.017 2.33.195 1.052 2.63 5.127 2.531 6.525-.077.878-2.078 2.936-2.289 2.799-.23-.064.608-1.463.297-2.628-.36-1.359-2.505-4.872-2.503-6.423 0-1.135 1.838-2.677 1.981-2.603z",
      fill: "white"
    })
  );
};

export default SvgSbd;