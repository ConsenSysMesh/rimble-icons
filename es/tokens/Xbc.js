var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgXbc = function SvgXbc(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#F7931A",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M19.483 14.816l-.409 1.637-1.091-.272.408-1.638-1.637-.408.272-1.09 1.637.407.409-1.637 1.091.272-.408 1.637 1.637.408-.272 1.092-1.637-.408zm-4.026-4.496c-.152 1.013-.704 1.505-1.434 1.68.999.527 1.504 1.34 1.011 2.758-.612 1.76-2.044 1.916-3.946 1.56l-.472 1.891-1.115-.277.466-1.868c-.297-.073-.593-.15-.888-.23L8.61 17.71l-1.113-.277.472-1.896c-.26-.067-.525-.138-.795-.205l-1.451-.362.561-1.307s.821.218.81.203c.317.077.458-.134.514-.274l.745-2.991.119.03a.88.88 0 00-.117-.038l.533-2.136c.015-.242-.065-.546-.518-.66.018-.011-.809-.2-.809-.2l.304-1.219 1.537.384-.001.006c.231.057.47.112.713.167l.467-1.874 1.114.278-.458 1.837c.3.068.6.137.893.21l.455-1.824 1.115.277-.467 1.874c1.407.488 2.434 1.225 2.223 2.608zm-2.57 3.664c.368-1.478-2.056-1.845-2.812-2.034l-.625 2.51c.756.188 3.086.94 3.439-.477h-.002zm.365-3.672c.335-1.345-1.693-1.633-2.322-1.79l-.568 2.278c.63.158 2.569.8 2.89-.488z",
      fill: "white"
    })
  );
};

export default SvgXbc;