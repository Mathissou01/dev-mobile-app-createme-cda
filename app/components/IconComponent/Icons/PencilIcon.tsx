import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function PencilIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M43.662 19.405c1.939-1.938 2.696-4.759 1.219-7.069-.91-1.422-2.233-3.152-4.146-5.064-1.913-1.913-3.644-3.237-5.066-4.145-2.31-1.476-5.13-.72-7.068 1.218L4.26 28.68c-.544.544-.916 1.232-1.005 1.996-.207 1.789-.469 5.71.032 12.232.074.963.842 1.73 1.805 1.804 6.525.502 10.446.24 12.235.033.764-.089 1.452-.462 1.996-1.005l24.338-24.333z" />
        <Path d="M41.087 21.979c-.99-1.848-2.943-4.845-6.586-8.488-3.636-3.637-6.625-5.586-8.472-6.575M18.881 44.119a58.243 58.243 0 00-6.787-8.217c-3.215-3.214-6.43-5.57-8.212-6.782" />
      </G>
    </Svg>
  );
}
