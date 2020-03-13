import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);
const SvgHtml = React.forwardRef((props, ref) => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={"currentcolor"}
    height={props.size}
    width={props.size}
    ref={ref}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M12.015 12.709v5.994l4.46-1.201L17.523 5.96h-5.508v4.898l.228-.71h.597l-.825 2.56zm-5.538 5.643L5.25 4.875h13.5l-1.227 13.477-5.538 1.523-5.508-1.523zm3.872-5.095v-.556l-1.851-.738 1.852-.742v-.557L7.705 11.74v.444l2.644 1.074zm5.95-1.074l-2.645 1.074v-.556l1.852-.74-1.852-.74v-.557l2.645 1.075v.444zm-4.284.525v-1.85l-.988 3.08h.591l.397-1.23z"
      fill="white"
    />
  </Svg>
));
SvgHtml.displayName = "SvgHtml";
SvgHtml.defaultProps = {
  size: 24,
  color: "#CFA967"
};
export default SvgHtml;
