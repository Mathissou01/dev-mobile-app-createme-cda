import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function FingerTapIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg viewBox="0 0 48 48" width={size} height={size} fill="none">
      <G
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path d="M123 450 c-36 -22 -50 -44 -55 -85 -4 -39 20 -45 28 -6 16 79 113 110 166 54 15 -16 28 -39 30 -52 4 -34 28 -39 28 -6 0 92 -113 147 -197 95z" />
        <Path d="M146 394 c-11 -11 -16 -34 -16 -76 0 -50 -4 -65 -25 -90 -29 -35 -31 -74 -7 -137 26 -67 55 -84 149 -84 44 0 90 6 102 13 30 15 62 90 64 147 2 54 -19 75 -98 98 l-53 16 -4 49 c-3 27 -11 56 -18 65 -16 20 -74 19 -94 -1z m79 -36 c2 -13 6 -41 7 -63 2 -31 8 -41 23 -44 11 -2 44 -12 73 -23 50 -19 52 -21 52 -56 0 -53 -18 -110 -38 -120 -31 -17 -94 -21 -141 -11 -54 11 -76 39 -87 107 -6 36 -3 44 20 65 23 21 26 32 26 89 0 72 3 78 36 78 16 0 25 -7 29 -22z" />
      </G>
    </Svg>
  );
}
