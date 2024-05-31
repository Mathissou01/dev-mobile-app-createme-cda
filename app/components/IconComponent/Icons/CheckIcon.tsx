import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function CheckIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <Path
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M45.2 9.523c1.062 1.447.826 3.396-.162 4.894-9.244 14.005-15.902 22.512-19.586 26.915-1.827 2.183-5 2.343-7.067.384A178.695 178.695 0 013.239 25.4c-1.31-1.607-1.581-3.874-.305-5.508 1.109-1.421 2.375-2.64 3.52-3.607 1.899-1.603 4.64-1.239 6.347.568 5.267 5.58 8.442 9.477 8.442 9.477s5.219-7.625 13.591-19.355c1.297-1.817 3.607-2.663 5.559-1.58 1.567.869 3.389 2.192 4.808 4.126z"
        clipRule="evenodd"
        strokeWidth={3}
      />
    </Svg>
  );
}
