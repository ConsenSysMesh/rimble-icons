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
const SvgMth = React.forwardRef((props, ref) => (
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
      d="M5.25 7.176l3.175 5.327V18c-1.753 0-3.175-1.377-3.175-3.076V7.176z"
      fill="white"
      fillOpacity={0.5}
    />
    <path
      d="M15.574 12.497l3.174-5.324h.001v7.752C18.75 16.623 17.328 18 15.574 18v-5.503z"
      fill="white"
      fillOpacity={0.6}
    />
    <path
      d="M11.998 12.344l-1.588 2.664c-.33-.083-.683-.402-1.062-.958L5.25 7.176c1.519-.85 3.461-.345 4.338 1.125l2.41 4.043z"
      fill="white"
      fillOpacity={0.8}
    />
    <path
      d="M14.412 8.295c.877-1.471 2.82-1.975 4.338-1.126l-4.098 6.874A3.2 3.2 0 0112 15.426a3.247 3.247 0 01-1.425-.326l-.165-.092 4.002-6.713z"
      fill="white"
    />
  </Svg>
));
SvgMth.displayName = "SvgMth";
SvgMth.defaultProps = {
  size: 24,
  color: "#104FCA"
};
export default SvgMth;
