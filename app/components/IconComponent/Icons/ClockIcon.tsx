import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function ClockIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M3 24a21 21 0 1042 0 21 21 0 10-42 0" />
        <Path d="M9 24a15 15 0 1030 0 15 15 0 10-30 0" />
        <Path d="M24 15v9l6 6" />
      </G>
    </Svg>
  );
}
