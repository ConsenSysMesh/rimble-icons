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
const SvgVia = React.forwardRef((props, ref) => (
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
      d="M8.35 10.722H6.004v-1.29h1.852L6.435 5.72l1.173-.47 2.663 6.95 3.45.023 2.671-6.973 1.174.47-1.422 3.713h1.852v1.29H15.65l-.578 1.507L18 12.25l-.008 1.29-3.412-.022L12 20.25l-2.592-6.766L6 13.462l.008-1.289 2.905.019-.563-1.47zm2.415 2.77L12 16.716l1.229-3.208-2.464-.015z"
      fill="white"
    />
  </Svg>
));
SvgVia.displayName = "SvgVia";
SvgVia.defaultProps = {
  size: 24,
  color: "#565656"
};
export default SvgVia;
