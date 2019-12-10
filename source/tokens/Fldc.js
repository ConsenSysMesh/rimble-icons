import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);

const SvgFldc = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#C40E09"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.65 5.355c.068.052.128.097.184.146.149.131.298.263.443.398.115.11.223.227.334.342.009.009.016.03.013.042-.067.26-.17.507-.306.736a2.99 2.99 0 01-.418.551 3.29 3.29 0 01-.728.567 6.684 6.684 0 01-.355.187c-.38.193-.786.301-1.198.377-.281.053-.566.09-.848.13-.372.05-.745.092-1.116.146-.548.08-1.084.204-1.592.44-.56.26-1.026.64-1.342 1.202-.211.375-.296.784-.293 1.217.007.83.291 1.548.782 2.187.3.39.642.736 1.002 1.063.249.227.503.448.751.675.318.293.636.585.908.926.142.18.283.364.405.56.209.334.375.694.483 1.079.06.21.096.423.113.642a3.03 3.03 0 01-.085.97c-.033.129-.034.131-.163.155-.18.033-.361.068-.543.097-.132.02-.266.033-.4.048-.046.006-.093.008-.14.012h-.028c0-.011 0-.022.003-.03.04-.108.085-.214.124-.322.084-.232.14-.473.17-.718.049-.431-.03-.868-.228-1.254-.138-.261-.313-.5-.52-.71a10.42 10.42 0 00-.904-.814 14.711 14.711 0 01-1.481-1.39 7.57 7.57 0 01-.76-.976 4.805 4.805 0 01-.575-1.204 3.535 3.535 0 01-.02-2.039c.11-.385.258-.747.486-1.072.302-.43.69-.75 1.137-.998.45-.251.93-.416 1.424-.54.398-.1.8-.175 1.206-.225.458-.055.915-.102 1.373-.154a5.781 5.781 0 001.105-.207c.329-.1.63-.272.883-.504.218-.204.38-.449.497-.73.107-.258.16-.531.198-.808.008-.061.012-.124.02-.2h-.001zm-5.295 9.62c.164-.033.32-.06.476-.094.399-.089.792-.195 1.162-.384.364-.185.687-.44.952-.75.27-.32.491-.671.607-1.088.072-.264.097-.54.075-.812a3.237 3.237 0 00-.551-1.55 6.28 6.28 0 00-.81-.966l-.161-.157c-.008-.008-.014-.016-.025-.03l.285-.044.617-.094c.108-.017.216-.034.324-.049.013-.001.031.013.042.024.191.224.388.443.572.673.24.299.443.626.608.978.146.314.253.641.306.988.037.242.053.487.028.731-.072.685-.276 1.318-.677 1.872a3.51 3.51 0 01-.901.855c-.403.266-.841.473-1.302.617-.197.063-.396.117-.595.173a.064.064 0 01-.053-.011c-.32-.285-.64-.573-.958-.86-.006-.004-.01-.01-.02-.022h-.001zM12.942 7.7l-.483.075-.547.085c-.064.01-.129.022-.194.029a.093.093 0 01-.066-.021 5.671 5.671 0 01-.586-.626c-.097-.124-.196-.248-.283-.38-.292-.454-.52-.937-.617-1.481a2.977 2.977 0 01.073-1.395c.008-.03.017-.045.052-.052.201-.034.4-.08.6-.112.165-.026.334-.04.5-.06l.136-.013c-.011.027-.018.045-.026.06a3.29 3.29 0 00-.294.93c-.068.442.003.893.204 1.292.165.334.392.617.648.878.267.27.557.513.847.755l.037.036h-.001zm-2.38 8.466l-.32.034c-.135.015-.27.025-.405.046-.208.032-.416.064-.622.11-.752.166-1.338.565-1.657 1.332a4.32 4.32 0 00-.26.87l-.013.05c-.043-.032-.083-.06-.119-.09-.15-.134-.299-.266-.445-.403-.106-.099-.206-.204-.31-.305-.036-.034-.043-.067-.03-.116.142-.512.422-.977.81-1.342.25-.232.53-.43.832-.589.424-.232.878-.366 1.343-.466.054-.011.11-.018.162-.032.033-.009.055 0 .078.022l.434.397.48.441a.632.632 0 01.042.041zm3.245-3.284c-.038-.008-.075-.017-.111-.028l-2.588-.81-.996-.31c-.127-.04-.193-.144-.183-.25.014-.158.066-.267.214-.296a.26.26 0 01.121.01c.281.086.56.176.84.263l1.981.618.79.245a.255.255 0 01.185.278c-.021.167-.121.276-.253.28zm-5.468 4.873c.024.006.053.01.08.019l3.604 1.125c.124.039.197.143.186.264-.014.163-.1.272-.228.284a.317.317 0 01-.117-.017c-.994-.309-1.987-.62-2.98-.93l-.62-.193c-.115-.037-.192-.135-.183-.247.011-.149.066-.262.199-.296.017-.005.036-.006.06-.01zm7.598-11.823c-.011.032-.026.102-.059.16-.052.094-.16.129-.265.096l-1.738-.543-1.866-.581c-.106-.033-.184-.096-.197-.216-.013-.135.05-.315.226-.336a.249.249 0 01.1.014l3.611 1.127c.12.038.188.126.188.279zM10.75 10.78c.007-.155.075-.272.196-.296a.303.303 0 01.143.008c.365.111.728.226 1.092.34l1.374.428a.255.255 0 01.183.29c-.028.172-.13.277-.27.262-.071-.01-.14-.038-.211-.06l-1.787-.558-.538-.168a.245.245 0 01-.182-.246zm-.25 1.417c.049.013.085.02.12.03l2.265.708.187.058c.139.045.207.174.17.321-.027.116-.083.206-.203.226a.26.26 0 01-.117-.01c-.288-.088-.575-.178-.862-.268l-1.603-.5c-.099-.03-.174-.09-.19-.198-.02-.12.012-.232.109-.31.037-.029.087-.04.124-.056zm-2.087 6.89c.01-.162.081-.288.228-.304a.24.24 0 01.095.01l2.493.777c.133.043.198.174.165.316-.029.12-.09.204-.208.23a.135.135 0 01-.067.002l-2.33-.727c-.069-.022-.138-.042-.207-.065a.247.247 0 01-.169-.239zm.748-2.04l.082.02 2.46.769c.12.037.195.142.186.26-.012.16-.095.27-.22.286a.313.313 0 01-.127-.016c-.663-.206-1.327-.415-1.99-.622-.159-.05-.318-.098-.475-.148-.115-.038-.185-.133-.175-.252.011-.154.072-.255.2-.288.017-.005.034-.005.059-.008zm5.716-10.171c-.08-.024-.16-.046-.238-.07-.77-.24-1.54-.483-2.312-.724-.153-.048-.215-.172-.173-.335.026-.105.08-.18.181-.203a.27.27 0 01.135.005c.682.21 1.366.424 2.049.637l.438.137a.248.248 0 01.17.27c-.013.1-.041.195-.136.244-.035.018-.075.026-.114.039zm.738-2.025c-.014.1-.041.208-.155.264a.242.242 0 01-.184.005l-1.774-.555-.692-.217c-.146-.045-.209-.171-.169-.327.027-.105.078-.187.184-.21a.286.286 0 01.14.008c.466.144.932.291 1.397.436l1.069.333c.116.037.184.128.184.263z"
      fill="white"
    />
  </Svg>
);

SvgFldc.displayName = "SvgFldc";
SvgFldc.defaultProps = {
  size: 24
};
export default SvgFldc;