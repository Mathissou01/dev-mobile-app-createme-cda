import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function CheckCircleIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M3 24a21 21 0 1 0 42 0 21 21 0 1 0-42 0" />
        <Path
          d="M35.231 16.94c.581.793.451 1.86-.085 2.684-4.333 6.648-7.587 10.974-9.617 13.5-1.33 1.655-3.699 1.779-5.211.288a95.36 95.36 0 0 1-7.169-7.913c-.713-.884-.86-2.125-.163-3.022a13.059 13.059 0 0 1 1.728-1.804c1.05-.912 2.586-.708 3.532.31 2.729 2.933 4.37 4.973 4.37 4.973s2.728-4.04 7.111-10.262c.718-1.02 2.011-1.495 3.09-.871.795.46 1.699 1.142 2.414 2.117Z"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
}
