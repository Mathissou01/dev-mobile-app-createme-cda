import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function AddIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg viewBox="0 0 48 48" height={size} width={size}>
      <G
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path d="M182 448 c-7 -7 -12 -26 -12 -44 0 -17 -3 -46 -6 -63 -6 -30 -8 -31 -64 -31 -68 0 -85 -14 -85 -70 0 -53 18 -70 74 -70 25 0 52 -4 60 -9 7 -5 16 -35 20 -67 5 -49 10 -61 31 -71 27 -14 74 -10 97 8 7 7 13 31 13 60 0 62 17 79 79 79 58 0 76 16 76 70 0 56 -17 70 -85 70 -65 0 -70 6 -70 86 0 52 -14 64 -70 64 -25 0 -51 -5 -58 -12z m98 -81 c0 -36 5 -68 12 -75 7 -7 39 -12 75 -12 l63 0 0 -39 0 -38 -65 -6 c-36 -4 -70 -9 -75 -12 -6 -4 -10 -35 -10 -70 0 -55 -3 -65 -20 -70 -11 -3 -29 -3 -40 0 -17 5 -20 15 -20 70 0 35 -4 66 -10 70 -5 3 -39 8 -75 12 l-65 6 0 38 0 39 63 0 c36 0 68 5 75 12 7 7 12 39 12 75 l0 63 40 0 40 0 0 -63z" />
      </G>
    </Svg>
  );
}
