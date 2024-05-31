import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function PlayIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G>
        <Path
          id="Rectangle 128"
          stroke={color}
          strokeLinejoin="round"
          d="M4.311 7.88c0.631 -3.639 3.947 -5.757 7.521 -4.53 3.376 1.157 8.323 3.198 15.274 6.794 6.823 3.529 11.714 6.559 15.085 8.877 3.745 2.577 3.745 7.381 0 9.958 -3.371 2.318 -8.262 5.348 -15.085 8.877 -6.95 3.596 -11.898 5.637 -15.274 6.795 -3.574 1.226 -6.89 -0.893 -7.52 -4.531C3.65 36.315 3 30.83 3 24c0 -6.83 0.651 -12.315 1.311 -16.12Z"
          strokeWidth={3}
        />
      </G>
    </Svg>
  );
}
