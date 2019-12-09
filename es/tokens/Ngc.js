var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgNgc = function SvgNgc(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#F80000",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M15.375 12.632L10.353 19.5l.185-5.58H9.375l.476-4.9 5.313-.732-1.745 4.444 1.956-.1zm-4.123 4.873v-1.313a.181.181 0 00-.185-.177.181.181 0 00-.185.177v1.313c0 .098.082.177.185.177a.18.18 0 00.184-.177zm-1.375-3.964h1.058l-.049 2.02c0 .053.02.104.06.142.039.037.092.06.147.06h.01a.203.203 0 00.206-.194l.048-2.383H10.3l.354-3.914a.16.16 0 00-.044-.123.172.172 0 00-.125-.053h-.03a.167.167 0 00-.17.148l-.408 4.296zm0-4.95l1.957-1.616c.104-1.616-.953-1.869-.953-1.869l.159-.606c1.745.505 1.48 2.424 1.48 2.424l2.538 1.06-5.18.607z",
      fill: "white"
    })
  );
};

export default SvgNgc;