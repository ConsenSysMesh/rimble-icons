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
const SvgCred = React.forwardRef((props, ref) => (
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
      d="M9.102 11.975l2.611 2.62L18.561 7.7l.939.952-7.787 7.847-3.55-3.572.939-.954zm1.582-.233L14.899 7.5l.94.953-4.213 4.245-.94-.956zm-1.707 3.622l-.927.935-3.55-3.572.938-.952 3.54 3.59z"
      fill="white"
    />
  </Svg>
));
SvgCred.displayName = "SvgCred";
SvgCred.defaultProps = {
  size: 24,
  color: "#37E8A3"
};
export default SvgCred;
