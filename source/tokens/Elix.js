import React from "react";

const SvgElix = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#00ADED"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M7.573 17.702l.002-.003 2.39-5.712-2.392-5.711 4.414 5.711-4.41 5.711-.004.004zm8.832 0l-.003-.004-4.41-5.71 4.413-5.712-2.392 5.711 2.39 5.712.002.003z"
      fill="white"
    />
    <path
      d="M11.989 11.988v3.98L7.57 17.7l4.418-5.715v-3.98l4.417-1.732-4.417 5.715z"
      fill="white"
      fillOpacity={0.8}
    />
    <path
      d="M11.989 15.967v3.489L7.57 17.698l4.418-1.737v-3.973L7.57 6.273l4.418 1.732V4.517l4.417 1.757-4.417 1.737v3.974l4.417 5.715-4.417-1.732z"
      fill="white"
      fillOpacity={0.5}
    />
    <path
      d="M7.571 6.274l4.418-1.757v3.494L7.57 6.274zm8.835 11.424l-4.417 1.758V15.96l4.417 1.737z"
      fill="white"
      fillOpacity={0.145}
    />
  </svg>
);

export default SvgElix;
