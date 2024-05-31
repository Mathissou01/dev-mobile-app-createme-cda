import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function SearchIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg viewBox="0 0 48 48" width={size} height={size} fill="none">
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M37.886 32.427A18.91 18.91 0 0 0 41 22c0-10.493-8.507-19-19-19S3 11.507 3 22s8.507 19 19 19c3.863 0 7.457-1.153 10.456-3.133l.977 1.177c1.261 1.522 2.504 3.022 3.868 4.503 1.61 1.747 4.06 1.952 5.76.293a46.789 46.789 0 0 0 .801-.801c1.66-1.701 1.454-4.151-.293-5.761-1.48-1.365-2.98-2.608-4.502-3.87-.392-.325-.786-.651-1.181-.981Z" />
        <Path d="M10 22a12 12 0 1 0 24 0 12 12 0 1 0-24 0" />
      </G>
    </Svg>
  );
}
