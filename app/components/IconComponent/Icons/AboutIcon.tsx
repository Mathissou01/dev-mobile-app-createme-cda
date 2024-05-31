import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { type IconProps } from "../../../types";

export default function AboutIcon({ color = "#000", size }: IconProps): React.JSX.Element {
  return (
    <Svg fill="none" viewBox="0 0 48 48" height={size} width={size}>
      <G stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <Path d="M24 3c11.598 0 21 9.402 21 21s-9.402 21-21 21S3 35.598 3 24 12.402 3 24 3z" />
        <Path d="M20.14 14.137c-.093-1.296.489-2.571 1.75-2.888A8.642 8.642 0 0124 11c.834 0 1.538.105 2.111.249 1.26.317 1.842 1.592 1.75 2.888-.19 2.696-.555 7.379-.949 10.003-.13.865-.65 1.609-1.512 1.754-.369.063-.83.106-1.4.106s-1.031-.044-1.4-.106c-.862-.145-1.383-.889-1.512-1.754-.394-2.624-.758-7.307-.949-10.003zM20.5 33.5a3.5 3.5 0 107 0 3.5 3.5 0 10-7 0" />
      </G>
    </Svg>
  );
}
