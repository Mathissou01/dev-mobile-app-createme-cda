import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function SendIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" width={size} height={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M42.145 3.292C31.498 5.115 10.77 14.992 3.744 19.69c-1.178.787-1.288 2.26-.245 3.22 1.522 1.398 4.35 3.732 9.5 7.347 0 0 .234 14.576 3 15 3.347-.554 6.914-2.953 10-6.5 3.837 2.43 6.352 3.815 7.828 4.566 1.023.52 2.227.288 2.79-.713 3.554-6.315 7.619-26.243 8.375-36.619.12-1.652-1.214-2.978-2.847-2.699z" />
        <Path d="M39 9.5S25.42 23.929 19.334 31.578a2 2 0 00-.411.96C18.653 34.352 17.68 40.382 16 45" />
      </G>
    </Svg>
  );
}
