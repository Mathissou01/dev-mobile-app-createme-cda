import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function BookIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M37.848 44.496c2.55-.218 4.477-2.198 4.664-4.75C42.75 36.516 43 31.365 43 24s-.25-12.517-.488-15.745c-.188-2.554-2.113-4.532-4.664-4.75C34.908 3.252 30.37 3 24 3c-6.37 0-10.909.253-13.848.504-2.55.219-4.476 2.197-4.664 4.75C5.25 11.484 5 16.635 5 24s.25 12.517.488 15.745c.188 2.553 2.113 4.533 4.664 4.75C13.092 44.748 17.63 45 24 45c6.37 0 10.909-.253 13.848-.504zM14 3.242v41.516M22 12h12M22 19h6" />
      </G>
    </Svg>
  );
}
