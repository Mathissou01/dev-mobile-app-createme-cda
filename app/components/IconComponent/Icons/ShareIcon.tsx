import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function ShareIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg viewBox="0 0 48 48" width={size} height={size} fill="none">
      <G
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path d="M293 418 c-6 -7 -13 -21 -16 -30 -5 -14 -18 -18 -64 -18 -68 0 -133 -28 -164 -72 -27 -38 -46 -179 -30 -221 9 -24 16 -28 43 -25 34 3 40 10 77 101 l20 47 58 0 c51 0 60 -3 68 -22 19 -43 50 -34 120 35 82 79 80 92 -28 178 -52 41 -69 47 -84 27z m85 -66 c29 -27 52 -55 52 -64 0 -15 -96 -108 -112 -108 -3 0 -8 10 -10 23 -3 20 -9 22 -77 25 -89 4 -102 -5 -132 -90 -12 -32 -28 -58 -35 -58 -21 0 -19 142 2 186 21 43 78 74 137 74 79 0 107 10 107 36 0 13 4 24 8 24 4 0 31 -22 60 -48z" />
      </G>
    </Svg>
  );
}
