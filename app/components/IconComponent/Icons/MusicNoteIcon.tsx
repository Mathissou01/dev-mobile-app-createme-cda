import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function MusicNoteIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 12.921c0-1.88 1.049-3.62 2.772-4.371 9.086-3.96 18.557-5.095 23.24-5.42C41.663 3.015 43 4.343 43 6v26h-.014A8.5 8.5 0 1137 23.372v-8.801c-4.183.507-10.216 1.613-17 4.018V37h-.015A8.5 8.5 0 1114 28.372V12.921z"
        strokeWidth={3}
      />
    </Svg>
  );
}
