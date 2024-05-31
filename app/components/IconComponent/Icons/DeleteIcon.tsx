import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function DeleteIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M20.842 3a3 3 0 00-2.91 2.272l-.444 1.777c-3.8.06-6.501.161-8.087.235-1.08.05-2.102.554-2.568 1.53A8.583 8.583 0 006.4 9.9c-.45 1.396.663 2.637 2.126 2.735 2.514.168 7.22.365 15.475.365 8.256 0 12.961-.197 15.474-.366 1.463-.098 2.576-1.338 2.126-2.733a8.722 8.722 0 00-.434-1.088c-.466-.975-1.487-1.479-2.567-1.529a264.954 264.954 0 00-8.088-.235l-.444-1.777A3 3 0 0027.158 3h-6.316zM38.419 18c-1.14 13.23-1.972 19.874-2.407 22.87-.2 1.382-.978 2.582-2.309 3.001C31.99 44.411 28.978 45 24 45s-7.99-.59-9.703-1.129c-1.331-.419-2.109-1.62-2.31-3-.434-2.997-1.266-9.64-2.406-22.871" />
      </G>
    </Svg>
  );
}
