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
const SvgTheta = React.forwardRef((props, ref) => (
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
      d="M8.22 4.5h7.56l.72.745v13.51l-.72.745H8.22l-.72-.745V5.245l.72-.745zm.72 13.51h6.12V5.99H8.94v12.02zm5.35-3.878h-1.565v1.697h-1.413v-1.696H9.747v-1.462h4.543v1.461zm0-4.186v1.46H9.747v-1.46h1.565V8.249h1.413v1.697h1.566z"
      fill="white"
    />
  </Svg>
));
SvgTheta.displayName = "SvgTheta";
SvgTheta.defaultProps = {
  size: 24,
  color: "#2AB8E6"
};
export default SvgTheta;
