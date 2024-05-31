import { Appearance } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const colorScheme = Appearance.getColorScheme();
const isDarkMode = colorScheme === "dark";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 0,
    paddingHorizontal: 25,
    "@media (max-height: 670)": {
      paddingTop: 0,
      paddingBottom: 10,
    },
  },
  titleCategory: {
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "transparent",
  },
  textCategory: {
    fontSize: 17,
    textTransform: "uppercase",
    "@media (max-height: 600)": {
      fontSize: 13,
    },
  },
  subCategory: {
    fontSize: 15,
    "@media (max-height: 600)": {
      fontSize: 12,
    },
  },
  blockParameter: {
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 5,
    marginHorizontal: 0,
    padding: 17,
    paddingLeft: 15,
    borderRadius: 10,
    borderWidth: isDarkMode ? 0 : 1,
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    paddingLeft: 1,
    paddingTop: -1,
    overflow: "hidden",
  },
});

export default styles;
