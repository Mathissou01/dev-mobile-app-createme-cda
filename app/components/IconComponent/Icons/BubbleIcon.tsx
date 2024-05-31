import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function BubbleIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <Path
        stroke={color}
        strokeLinejoin="round"
        d="M45 24c0-11.598-9.402-21-21-21S3 12.402 3 24c0 3.802 1.01 7.367 2.777 10.443-.91 2.377-1.768 5.137-2.331 7.896a1.797 1.797 0 002.197 2.12c2.643-.626 5.325-1.494 7.681-2.371A20.902 20.902 0 0024 45c11.598 0 21-9.402 21-21z"
        strokeWidth={3}
      />
    </Svg>
  );
}
