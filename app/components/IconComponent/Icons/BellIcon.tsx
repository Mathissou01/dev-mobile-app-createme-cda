import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function BellIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M39.196 16.949C38.519 9.059 31.918 3 24 3S9.48 9.06 8.804 16.949l-.479 5.59A16 16 0 016 29.574l-1.472 2.384c-1.477 2.393-.671 4.866 2.117 5.237C9.833 37.62 15.157 38 24 38s14.166-.38 17.355-.804c2.788-.371 3.594-2.844 2.117-5.237L42 29.575a16.001 16.001 0 01-2.325-7.037l-.48-5.59zM16.048 37.878a8.001 8.001 0 0015.904 0M24 9c4.69 0 8.6 3.91 9 9" />
      </G>
    </Svg>
  );
}
