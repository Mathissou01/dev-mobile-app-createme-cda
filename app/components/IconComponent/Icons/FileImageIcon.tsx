import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function FileImageIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path d="M177 461 c-87 -5 -111 -9 -121 -23 -29 -40 -30 -356 -1 -395 27 -37 329 -39 365 -3 23 23 38 230 21 282 -14 43 -128 154 -151 146 -3 -1 -54 -4 -113 -7z m98 -81 c8 -60 31 -80 92 -80 l43 0 0 -114 c0 -91 -3 -116 -16 -127 -22 -18 -286 -18 -308 0 -13 11 -16 41 -16 180 0 117 4 171 12 179 7 7 45 12 99 12 l87 0 7 -50z m87 3 c21 -20 38 -41 38 -45 0 -9 -51 -11 -74 -2 -11 4 -16 19 -16 45 0 21 3 39 7 39 4 0 24 -17 45 -37z" />
      </G>
    </Svg>
  );
}
