import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function TextIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg viewBox="0 0 48 48" width={size} height={size} fill="none">
      <G
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path d="M24 449 c-10 -17 -8 -119 2 -128 25 -23 54 -22 78 3 13 15 34 26 50 26 l26 0 0 -120 c0 -113 -1 -120 -20 -120 -44 0 -51 -82 -8 -94 30 -8 146 -8 176 0 43 12 36 94 -8 94 -19 0 -20 7 -20 120 l0 120 26 0 c16 0 37 -11 50 -26 24 -25 53 -26 78 -3 10 9 12 111 2 128 -10 16 -422 16 -432 0z m404 -66 c-3 -52 -24 -69 -34 -28 -6 25 -9 26 -63 23 l-56 -3 0 -145 c0 -143 0 -145 23 -148 14 -2 22 -10 22 -23 0 -17 -8 -19 -80 -19 -72 0 -80 2 -80 19 0 13 8 21 23 23 22 3 22 5 22 148 l0 145 -56 3 c-54 3 -57 2 -63 -23 -10 -41 -31 -24 -34 28 l-3 47 191 0 191 0 -3 -47z" />
      </G>
    </Svg>
  );
}
