import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../config/styles/01-settings/_colors";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    "@media (max-height: 600)": {
      marginTop: 70,
    },
  },

  logo: {
    width: 160,
    height: 160,
  },

  main_container: {
    padding: 40,
    paddingTop: 120,
    flex: 1,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },

  main_info_container: {
    transform: [{ translateY: -70 }, { translateX: 0 }],
  },

  title: {
    fontSize: 32,
    textAlign: "center",
    paddingBottom: 60,
    "@media (max-height: 670)": {
      fontSize: 25,
      paddingBottom: 0,
    },
    "@media (max-height: 600)": {
      fontSize: 20,
      paddingBottom: 10,
    },
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginTop: 60,
    borderRadius: 4,
    backgroundColor: colors.secondaryColorDark,
    "@media (max-height: 600)": {
      marginTop: 20,
      paddingVertical: 10,
    },
  },

  text: {
    fontSize: 17,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    "@media (max-height: 600)": {
      fontSize: 13,
    },
  },

  moreInfos: {
    paddingTop: 15,
    fontSize: 12,
    "@media (max-height: 600)": {
      fontSize: 9,
    },
  },

  secondAction: {
    fontSize: 17,
    lineHeight: 21,
    letterSpacing: 0.25,
    paddingTop: 15,
    textAlign: "center",
    "@media (max-height: 600)": {
      fontSize: 13,
      paddingTop: 10,
    },
  },
});

export default styles;
