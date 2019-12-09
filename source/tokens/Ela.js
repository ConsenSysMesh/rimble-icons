import React from "react";

const SvgEla = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#3FBADF"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M8.25 16.59L12 14.473v4.227l-3.75-2.112zm0-6.75L12 7.723v4.226L8.25 9.84z"
      fill="white"
      fillOpacity={0.4}
    />
    <path
      d="M19.5 14.422l-3.75 2.165v-4.264l3.75 2.1zm0-6.75l-3.75 2.165V5.573l3.75 2.1z"
      fill="white"
      fillOpacity={0.7}
    />
    <path
      d="M8.25 16.588v-4.263L12 14.479l-3.75 2.11zm0-6.75V5.576L12 7.728l-3.75 2.11z"
      fill="white"
      fillOpacity={0.8}
    />
    <path
      d="M15.75 16.587L12 14.478l3.75-2.155v4.264zm0-6.75L12 7.728l3.75-2.155v4.264z"
      fill="white"
    />
    <path
      d="M15.75 16.587L12 18.701v-4.223l3.75 2.109zm0-6.75L12 11.951V7.728l3.75 2.109z"
      fill="white"
      fillOpacity={0.6}
    />
    <path
      d="M8.25 12.325v4.263L4.5 14.424l3.75-2.098zm0-6.75v4.263L4.5 7.674l3.75-2.099z"
      fill="white"
      fillOpacity={0.5}
    />
  </svg>
);

export default SvgEla;
