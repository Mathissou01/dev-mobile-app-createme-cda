import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function BellOffIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M15.892 38.665c.696 6.24 7.886 9.387 12.942 5.665.232-.171.454-.354.667-.548" />
        <Path d="M10.274 9.606A16.273 16.273 0 0 1 24 2.082c8.442 0 15.483 6.454 16.216 14.864l.48 5.497a17.087 17.087 0 0 0 2.547 7.597l1.429 2.278c1.616 2.577.74 5.245-2.276 5.634-.96.124-2.098.245-3.446.352m-7.476.382c-2.184.06-4.661.096-7.474.096-9.332 0-14.987-.39-18.396-.83-3.016-.389-3.892-3.057-2.276-5.634l1.43-2.278a17.088 17.088 0 0 0 2.548-7.596l.478-5.497c.059-.68.16-1.348.299-2M2.638 2.13l42.72 42.72" />
      </G>
    </Svg>
  );
}
