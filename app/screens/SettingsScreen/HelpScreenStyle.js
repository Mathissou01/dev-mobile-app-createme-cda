import { Appearance } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../config/styles/01-settings/_colors";

const colorScheme = Appearance.getColorScheme();
const isDark = colorScheme === "dark";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  messageError: {
    paddingTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: isDark ? colors.successDark : colors.success,
  },
  textPrinciple: {
    fontSize: 20,
    "@media (max-width: 380)": {
      fontSize: 15,
    },
  },
});

export default styles;
