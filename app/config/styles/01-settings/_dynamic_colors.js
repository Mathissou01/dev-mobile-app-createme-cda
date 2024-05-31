import chroma from 'chroma-js';

export function generatePalette(primaryColor, secondaryColor) {
  // -- Color function
  const primaryColor = primaryColorSelected;
  const secondaryColor = secondaryColorSelected;
  const primaryColorDark = chroma(primaryColor).darken().hex();
  const primaryColorExtradark = chroma(primaryColor).darken(2).hex();
  const primaryColorLight = chroma(primaryColor).alpha(0.3).hex();
  const primaryColorExtraLight = chroma(primaryColor).alpha(0.1).hex();
  // -----------------------------------------------------------------
  const secondaryColorDark = chroma(secondaryColor).darken().hex();
  const secondaryColorExtradark = chroma(secondaryColor).darken(2).hex();
  const secondaryColorLight = chroma(secondaryColor).alpha(0.3).hex();
  const secondaryColorExtraLight = chroma(secondaryColor).alpha(0.1).hex();

  return {
    primary: {
      extraLight: primaryColorExtraLight,
      light: primaryColorLight,
      dark: primaryColorDark,
      extraDark: primaryColorExtradark,
    },
    secondary: {
      extraLight: secondaryColorExtraLight,
      light: secondaryColorLight,
      dark: secondaryColorDark,
      extraDark: secondaryColorExtradark,
    },
  };
}
