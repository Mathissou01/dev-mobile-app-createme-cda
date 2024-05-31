import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function CameraIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg viewBox="0 0 48 48" width={size} height={size} fill="none">
      <G
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path d="M142 410 c-18 -17 -43 -30 -57 -30 -41 0 -61 -30 -69 -103 -8 -79 2 -190 19 -214 33 -44 376 -43 409 2 18 25 28 130 20 212 -8 75 -28 103 -72 103 -19 0 -38 10 -55 30 -25 28 -32 30 -96 30 -62 0 -71 -3 -99 -30z m175 -25 c12 -17 32 -28 63 -33 l45 -8 3 -124 c1 -69 -2 -132 -8 -140 -14 -22 -346 -22 -360 0 -6 8 -9 71 -8 140 l3 124 45 8 c31 5 51 16 63 33 16 22 26 25 77 25 51 0 61 -3 77 -25z" />
        <Path d="M169 291 c-41 -41 -41 -101 0 -142 65 -64 171 -20 171 71 0 91 -106 135 -171 71z m121 -21 c24 -24 26 -67 4 -98 -11 -16 -25 -22 -54 -22 -29 0 -43 6 -54 22 -36 51 -5 118 54 118 17 0 39 -9 50 -20z" />
      </G>
    </Svg>
  );
}
