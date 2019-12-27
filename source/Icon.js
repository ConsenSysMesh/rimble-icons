import React from "react";
import * as tokenIcons from "./tokens/index";
import * as mdIcons from "./md/index";

const Icon = ({ name, ...props }) => {
  if (tokenIcons[name]) {
    const Component = tokenIcons[name];
    return <Component {...props} />;
  } else if (mdIcons[name]) {
    const Component = mdIcons[name];
    return <Component {...props} />;
  } else {
    return false;
  }
};

Icon.displayName = "Icon";

export default Icon;
