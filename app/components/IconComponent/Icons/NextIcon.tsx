import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function NextIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G>
        <Path
          id="Rectangle 59"
          stroke={color}
          strokeLinejoin="round"
          d="M42.737 6.059c1.225 0.124 1.911 1.202 1.96 2.431a396.95 396.95 0 0 1 0 31.02c-0.049 1.23 -0.735 2.307 -1.96 2.431 -0.352 0.036 -0.762 0.059 -1.237 0.059 -0.475 0 -0.885 -0.023 -1.237 -0.059 -1.225 -0.124 -1.911 -1.202 -1.96 -2.431a396.942 396.942 0 0 1 0 -31.02c0.049 -1.23 0.735 -2.307 1.96 -2.431A12.21 12.21 0 0 1 41.5 6c0.475 0 0.885 0.023 1.237 0.059Z"
          strokeWidth={3}
        />
        <Path
          id="Rectangle 128"
          stroke={color}
          strokeLinejoin="round"
          d="M4.035 9.836c0.542 -3.496 3.624 -5.514 6.926 -4.242 2.793 1.077 6.748 2.882 12.157 5.907 5.587 3.124 9.622 5.815 12.43 7.89 3.274 2.423 3.274 6.797 0 9.219 -2.808 2.076 -6.843 4.767 -12.43 7.89 -5.409 3.025 -9.364 4.83 -12.157 5.907 -3.302 1.273 -6.384 -0.745 -6.926 -4.241C3.505 34.752 3 29.94 3 24c0 -5.94 0.505 -10.752 1.035 -14.165Z"
          strokeWidth={3}
        />
      </G>
    </Svg>
  );
}
