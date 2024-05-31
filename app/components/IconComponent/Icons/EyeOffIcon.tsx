import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function EyeOffIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M37 36.75a22.03 22.03 0 008.2-11.85 3.366 3.366 0 000-1.801C42.62 13.814 34.106 7 24 7a21.9 21.9 0 00-12.652 4M32 39.5c-2.48.968-5.178 1.5-8 1.5-10.107 0-18.622-6.814-21.2-16.099a3.366 3.366 0 010-1.802A21.94 21.94 0 017.028 15" />
        <Path d="M31.142 31a9.967 9.967 0 002.859-7c0-5.523-4.477-10-10-10a9.97 9.97 0 00-7.142 3M3 3l42 42" />
      </G>
    </Svg>
  );
}
