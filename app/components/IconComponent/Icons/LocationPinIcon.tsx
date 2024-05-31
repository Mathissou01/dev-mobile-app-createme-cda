import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function LocationPinIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G>
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M42.5239 20.5476C42.5239 33.8421 28.7844 43.3199 24.9712 45.6945C24.3675 46.0703 23.6325 46.0703 23.0288 45.6945C19.2156 43.3199 5.4761 33.8421 5.4761 20.5476C5.4761 10.3171 13.7696 2.0237 24 2.0237S42.5239 10.3171 42.5239 20.5476Z"
          strokeWidth={3}
        />
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M32.2328 20.5476C32.2328 25.0945 28.5469 28.7804 24 28.7804S15.7672 25.0945 15.7672 20.5476S19.4531 12.3147 24 12.3147S32.2328 16.0007 32.2328 20.5476Z"
          strokeWidth={3}
        />
      </G>
    </Svg>
  );
}
