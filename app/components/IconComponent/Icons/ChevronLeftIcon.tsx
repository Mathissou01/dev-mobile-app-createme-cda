import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function ChevronLeftIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <Path
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.923 24.371a.52.52 0 010-.721c1.364-1.433 6.649-6.976 13.36-13.937 1.14-1.183 1.816-2.838.977-4.25a7.67 7.67 0 00-1.311-1.627 7.723 7.723 0 00-2.34-1.557c-1.173-.49-2.45-.086-3.475.663-7.16 5.217-14.238 12.652-18.261 17.153a5.84 5.84 0 000 7.831c4.024 4.502 11.103 11.936 18.263 17.137 1.024.745 2.298 1.148 3.466.658a7.72 7.72 0 002.347-1.558 7.68 7.68 0 001.31-1.627c.84-1.412.163-3.068-.977-4.251a4287.492 4287.492 0 01-13.359-13.914z"
        clipRule="evenodd"
        strokeWidth={3}
      />
    </Svg>
  );
}
