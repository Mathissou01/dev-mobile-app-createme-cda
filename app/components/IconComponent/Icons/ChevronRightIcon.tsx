import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function ChevronRightIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <Path
        fill={color}
        d="M110 450c-34-34-24-58 52-136l71-74-71-74c-40-41-72-81-72-89 0-29 12-48 40-62 26-13 31-12 72 15 24 16 76 63 116 103 91 94 94 115 25 189-75 80-161 148-189 148-13 0-33-9-44-20zm129-70c79-68 121-118 121-145 0-22-159-180-191-190-14-5-27-1-37 9-18 18-17 20 87 129l55 57-55 58c-99 104-103 110-89 127 20 25 36 18 109-45z"
        transform="matrix(.1 0 0 -.1 0 48)"
      />
    </Svg>
  );
}
