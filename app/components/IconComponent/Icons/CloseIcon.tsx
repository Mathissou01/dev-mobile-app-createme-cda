import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function CloseIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill={color} width={size} height={size} viewBox="0 0 48 48">
      <Path
        d="M22 458c-25-25-11-54 70-135l83-83-83-83C11 76-3 47 22 22s54-11 135 70l83 83 83-83c81-81 110-95 135-70s11 54-70 135l-83 83 83 83c81 81 95 110 70 135s-54 11-135-70l-83-83-83 83c-81 81-110 95-135 70zm123-98c44-44 86-80 95-80 8 0 52 37 97 82 65 65 85 80 95 70s-5-30-70-95c-45-45-82-89-82-97s37-52 82-97c65-65 80-85 70-95s-30 5-95 70c-45 45-89 82-97 82-9 0-51-36-95-80C69 44 40 25 40 53c0 7 36 48 80 92s80 86 80 95c0 8-37 51-81 96-71 71-90 104-61 104 4 0 43-36 87-80z"
        transform="matrix(.1 0 0 -.1 0 48)"
      />
    </Svg>
  );
}
