import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function DownloadIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg viewBox="0 0 48 48" width={size} height={size} fill="none">
      <G
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path d="M186 452 c-3 -5 -8 -49 -12 -99 l-7 -91 -36 -7 c-34 -6 -50 -19 -51 -38 0 -14 103 -118 132 -133 24 -13 32 -13 56 0 29 15 132 119 132 133 -1 19 -17 32 -51 38 l-36 7 -7 91 c-4 50 -9 94 -12 99 -7 10 -101 10 -108 0z m89 -122 l7 -100 33 0 c55 0 53 -19 -9 -77 -31 -29 -61 -53 -66 -53 -5 0 -35 24 -66 53 -62 58 -64 77 -9 77 l33 0 7 100 8 100 27 0 27 0 8 -100z" />
        <Path d="M38 95 c-20 -45 1 -71 64 -78 68 -9 208 -9 276 0 63 7 84 33 64 78 -10 21 -18 25 -58 25 -53 0 -58 -23 -6 -28 48 -5 44 -37 -5 -46 -49 -8 -217 -8 -265 0 -50 9 -54 41 -6 46 52 5 47 28 -6 28 -40 0 -48 -4 -58 -25z" />
      </G>
    </Svg>
  );
}
