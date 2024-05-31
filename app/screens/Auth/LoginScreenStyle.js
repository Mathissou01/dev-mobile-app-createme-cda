import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../config/styles/01-settings/_colors";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  main_info_container: {
    transform: [{ translateY: -80 }, { translateX: 0 }],
    backgroundColor: "transparent",
  },
  main_container: {
    padding: 40,
    flex: 1,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.secondaryColorDark,
    "@media (max-height: 600)": {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 28,
      paddingRight: 28,
      marginTop: 20,
    },
  },
  text: {
    fontSize: 17,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: colors.white,
    "@media (max-height: 600)": {
      fontSize: 13,
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 100,
    backgroundColor: "transparent",
    position: "relative",
    "@media (max-height: 600)": {
      marginBottom: 0,
      marginTop: 200,
    },
  },
  logo: {
    width: 200,
    height: 200,
    margin: 0,
    "@media (max-height: 600)": {
      width: 160,
      height: 160,
    },
  },
  secondAction: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    paddingTop: 6,
    "@media (max-height: 600)": {
      fontSize: 10,
    },
  },
  InputContainer: {
    backgroundColor: "transparent",
  },
});

export default styles;
