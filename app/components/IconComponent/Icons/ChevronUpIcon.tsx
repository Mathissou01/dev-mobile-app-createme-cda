import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function ChevronUpIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path d="M135 319 c-41 -39 -88 -91 -104 -116 -28 -42 -29 -47 -16 -73 14 -28 33 -40 62 -40 8 0 48 32 89 72 l74 71 74 -71 c41 -40 81 -72 89 -72 29 0 48 12 62 40 13 26 12 31 -16 73 -16 25 -63 77 -104 116 -59 56 -82 71 -105 71 -23 0 -46 -15 -105 -71z m211 -44 c91 -94 105 -119 80 -143 -18 -18 -20 -17 -128 87 l-58 55 -57 -55 c-109 -104 -111 -105 -129 -87 -25 24 -11 49 80 143 58 59 89 85 106 85 17 0 48 -26 106 -85z" />
      </G>
    </Svg>
  );
}
