var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgXlm = function SvgXlm(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#14B6E7",
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
      d: "M9.584 10.145c.517-.92 1.044-1.834 1.583-2.742 1.577-2.65 5.793-2.925 6.022-2.76l-.002.005.003-.003c.23.165 1.395 4.312-.516 6.721-.65.819-1.31 1.629-1.98 2.431.697 1.096 1.172 2.948-.47 5.558-.078.123-.225.224-.236-.031-.025-.622-.242-1.858-1.427-3.013l-.075.088c-.364.438-.667.38-1.167.02l-.04-.03c-.058.22-.154.427-.283.614-.014.021-.031.04-.047.062-1.11 1.562-2.675 2.33-3.529 1.714-.853-.615-.675-2.383.389-3.98l.041-.067a1.95 1.95 0 01.465-.475c-.5-.361-.657-.633-.376-1.13l.04-.072c-1.465-.715-2.678-.503-3.265-.318-.243.078-.199-.1-.109-.217 1.854-2.418 3.712-2.642 4.98-2.375zm-.784 4.46a1.361 1.361 0 00-.19.218l-.03.045c-.75 1.099-.88 2.31-.286 2.73.594.418 1.69-.114 2.472-1.19.011-.015.024-.027.034-.042.052-.073.095-.15.13-.227l-1.113-.801-1.017-.732zm3.699-6.577a1.753 1.753 0 00.412 2.414 1.683 1.683 0 002.373-.418 1.752 1.752 0 00-.413-2.415 1.684 1.684 0 00-2.372.419z",
      fill: "white"
    })
  );
};

export default SvgXlm;