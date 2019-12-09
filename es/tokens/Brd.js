var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgBrd = function SvgBrd(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#FE5D86",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M6 6.78c0-.431.354-.78.79-.78h5.692c3.357 0 4.54.396 5.357 1.2a2.573 2.573 0 01.735 1.955c0 1.389-.748 2.33-2.766 2.743 1.949.34 2.938 1.133 2.938 2.726a2.705 2.705 0 01-.765 2.021c-.799.788-2.104 1.355-5.616 1.355H6.79a.785.785 0 01-.79-.78V6.78zm4.32 4.47c0-.287.237-.519.528-.519h1.832c1.046 0 1.828-.051 2.19-.426a.885.885 0 00.243-.668.844.844 0 00-.226-.657c-.367-.361-1.149-.425-2.207-.425H9.27v6.924h3.375c1.149 0 2-.085 2.398-.481a.915.915 0 00.26-.703.967.967 0 00-.26-.72c-.402-.395-1.253-.425-2.398-.425H10.86a.533.533 0 01-.503-.33.515.515 0 01-.037-.207v-1.362z",
      fill: "white"
    })
  );
};

export default SvgBrd;