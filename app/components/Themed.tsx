import React from "react";
import {
  ScrollView as DefaultScrollView,
  Text as DefaultText,
  TextInput as DefaultTextInput,
  View as DefaultView,
} from "react-native";
import { colors } from "../config/styles/01-settings/_colors";
import useColorScheme from "@hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof colors
): string {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    const name = colorName;
    return "#ff0";
  }
}

interface ThemeProps {
  lightColor?: string;
  darkColor?: string;
}

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];

export function Text(
  props: TextProps & {
    bold?: boolean;
    semiBold?: boolean;
    extraBold?: boolean;
    italic?: boolean;
    medium?: boolean;
    regular?: boolean;
    light?: boolean;
    extraLight?: boolean;
    thin?: boolean;
    bolditalic?: boolean;
    backgroundColor?: string;
  }
) {
  const {
    style,
    lightColor,
    darkColor,
    semiBold,
    bold,
    extraBold,
    medium,
    regular,
    light,
    extraLight,
    thin,
    italic,
    bolditalic,
    backgroundColor = "transparent",
    ...otherProps
  } = props;
  const color = useThemeColor(
    {
      light: lightColor ?? colors.textLight,
      dark: darkColor ?? colors.textDark,
    },
    "textLight"
  );

  let fontFamily = "Raleway-Regular";
  let fontStyle: "normal" | "italic" = "normal";

  if (bold) {
    fontFamily = "Raleway-Bold";
  } else if (semiBold) {
    fontFamily = "Raleway-semiBold";
  } else if (extraBold) {
    fontFamily = "Raleway-ExtraBold";
  } else if (medium) {
    fontFamily = "Raleway-Medium";
  } else if (thin) {
    fontFamily = "Raleway-Thin";
  } else if (extraLight) {
    fontFamily = "Raleway-ExtraLight";
  } else if (light) {
    fontFamily = "Raleway-Light";
  } else if (regular) {
    fontFamily = "Raleway-Regular";
  } else if (bolditalic) {
    fontFamily = "Raleway-Bold";
    fontStyle = "italic";
  }

  if (italic) {
    fontStyle = "italic";
  }

  return (
    <DefaultText
      style={[
        {
          color,
          fontFamily,
          fontStyle,
          backgroundColor,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps): React.JSX.Element {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor ?? colors.backgroundDefault,
      dark: darkColor ?? colors.backgroundDark,
    },
    "backgroundDark"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps): React.JSX.Element {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor ?? colors.backgroundDefault,
      dark: darkColor ?? colors.backgroundDark,
    },
    "backgroundDark"
  );

  return (
    <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function TextInput(props: TextInputProps): React.JSX.Element {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    {
      light: darkColor ?? colors.darkColorText,
      dark: lightColor ?? colors.lightColorText,
    },
    "textLight"
  );

  return <DefaultTextInput style={[{ color }, style]} {...otherProps} />;
}
