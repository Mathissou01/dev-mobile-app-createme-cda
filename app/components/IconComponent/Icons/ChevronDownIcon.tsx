import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function ChevronDownIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G>
        <Path
          fillRule="evenodd"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24.3711 25.0763C24.1698 25.2703 23.8511 25.2703 23.6498 25.0763C18.9914 20.6367 14.3457 16.1839 9.7126 11.7179C8.5297 10.5772 6.8747 9.9013 5.4637 10.7409C4.864 11.1012 4.3164 11.5419 3.8361 12.0506C3.1783 12.7292 2.6506 13.5229 2.2793 14.3921C1.7882 15.5634 2.1927 16.8403 2.9415 17.8669C8.159 25.0256 15.5944 32.104 20.0947 36.128C22.3185 38.1374 25.7024 38.1374 27.9262 36.128C32.4275 32.104 39.8619 25.0245 45.0635 17.8637C45.8081 16.8392 46.2105 15.5665 45.7215 14.3984C45.3503 13.5268 44.8219 12.7309 44.1626 12.0506C43.6826 11.5419 43.1354 11.1013 42.5361 10.7409C41.124 9.9002 39.4679 10.5762 38.285 11.7168C33.6571 16.1801 29.0191 20.6329 24.3711 25.0752Z"
          clipRule="evenodd"
          strokeWidth={3}
        />
      </G>
    </Svg>
  );
}
