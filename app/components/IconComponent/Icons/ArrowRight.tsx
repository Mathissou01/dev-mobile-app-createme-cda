import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function ArrowRight({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" width={size} height={size}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M31.908 38.2c-1.546 1.21-3.463.329-3.615-1.629-.13-1.686-.258-4.004-.33-7.097a390.051 390.051 0 01-21.838-.72c-1.635-.103-2.968-1.235-3.068-2.87a30.783 30.783 0 01-.054-1.875c0-.715.021-1.339.054-1.876.1-1.635 1.433-2.767 3.068-2.87a390.18 390.18 0 0121.838-.72c.072-3.091.2-5.408.33-7.095.152-1.958 2.07-2.839 3.616-1.629 1.393 1.09 3.292 2.676 5.792 4.959 3.506 3.201 5.506 5.624 6.606 7.183.887 1.256.887 2.84 0 4.096-1.1 1.559-3.1 3.982-6.606 7.183-2.5 2.284-4.4 3.871-5.793 4.96z"
        strokeWidth={3}
      />
    </Svg>
  );
}
