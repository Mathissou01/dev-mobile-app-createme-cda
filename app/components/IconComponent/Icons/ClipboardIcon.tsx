import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function ClipboardIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M29.114 3.049c1.75.036 3.07 1.58 2.864 3.318l-.234 1.984A3 3 0 0128.765 11h-9.53a3 3 0 01-2.98-2.649l-.234-1.984c-.205-1.738 1.115-3.282 2.865-3.318C20.407 3.018 22.106 3 24.001 3c1.894 0 3.592.018 5.113.049z" />
        <Path d="M16.002 6.124c-2.71.091-4.776.222-6.31.352C7.394 6.67 5.677 8.37 5.48 10.67 5.24 13.48 5 18.136 5 25.5c0 7.365.24 12.021.48 14.83.196 2.299 1.913 4 4.213 4.194C12.479 44.76 17.026 45 24 45s11.521-.24 14.307-.476c2.3-.194 4.017-1.895 4.213-4.194.24-2.809.48-7.465.48-14.83 0-7.364-.24-12.02-.48-14.83-.196-2.299-1.913-4-4.213-4.194-1.533-.13-3.6-.26-6.31-.352" />
      </G>
    </Svg>
  );
}
