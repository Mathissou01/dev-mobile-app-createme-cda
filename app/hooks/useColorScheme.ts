import { createContext } from "react";
import { type ColorSchemeName, useColorScheme as _useColorScheme } from "react-native";
import chroma from "chroma-js"; // The useColorScheme value is always either light or dark, but the built-in

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}

type Theme = "light" | "dark";
const primaryColor = "red";
const secondaryColor = "blue";

export interface ThemeContextType {
  colors: {
    primaryExtraLight: string;
    primaryLight: string;
    primarySemiLight: string;
    primary: string;
    primaryDark: string;
    primarySemiDark: string;
    primaryExtraDark: string;
    secondaryExtraLight: string;
    secondaryLight: string;
    secondarySemiLight: string;
    secondary: string;
    secondaryDark: string;
    secondarySemiDark: string;
    secondaryExtraDark: string;
  };
  setColors: (newColors: Partial<ThemeContextType["colors"]>) => void;
  isDark: boolean;
  setIsDark?: (theme: boolean) => void;
}

interface ThemeContextValue {
  theme: Theme;
  mode?: Theme;
}

export const initialeThemeContextValue: ThemeContextValue = {
  theme: "light",
  mode: "light",
};

export const ThemeContext = createContext<ThemeContextType | null>({
  colors: {
    primaryExtraLight: chroma(primaryColor).brighten(2).hex(),
    primaryLight: chroma(primaryColor).brighten(1).hex(),
    primarySemiLight: chroma(primaryColor).brighten(0.5).hex(),
    primary: primaryColor,
    primarySemiDark: chroma(primaryColor).darken(0.5).hex(),
    primaryDark: chroma(primaryColor).darken(1).hex(),
    primaryExtraDark: chroma(primaryColor).darken(2).hex(),
    secondaryExtraLight: chroma(secondaryColor).brighten(2).hex(),
    secondaryLight: chroma(secondaryColor).brighten(1).hex(),
    secondarySemiLight: chroma(secondaryColor).brighten(0.5).hex(),
    secondary: secondaryColor,
    secondaryDark: chroma(secondaryColor).darken(0.5).hex(),
    secondarySemiDark: chroma(secondaryColor).darken(1).hex(),
    secondaryExtraDark: chroma(secondaryColor).darken(2).hex(),
  },
  setColors: () => {},
  isDark: false,
  setIsDark: () => {},
});
