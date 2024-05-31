import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function EyeOnIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M2.8 24.901a3.366 3.366 0 010-1.802C5.38 13.815 13.894 7 24 7s18.62 6.814 21.2 16.099c.163.59.163 1.212 0 1.802C42.62 34.184 34.106 41 24 41S5.38 34.186 2.8 24.901z" />
        <Path d="M14 24a10 10 0 1020 0 10 10 0 10-20 0" />
        <Path d="M21 24a3 3 0 106 0 3 3 0 10-6 0" />
      </G>
    </Svg>
  );
}
