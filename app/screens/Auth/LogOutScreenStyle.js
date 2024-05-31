import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../config/styles/01-settings/_colors";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
  },
  ellispe: {
    width: 60,
    height: 50,
    borderRadius: 50,
    transform: [{ scaleX: 2 }],
    top: () => -EStyleSheet.value("$contentWidth") / 10,
    elevation: 10,
    zIndex: -10,
    left: 0,
    shadowColor: "#171517",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    overflow: "hidden",
    shadowRadius: 8,
    "@media (max-width: 380)": {
      elevation: 0,
    },
  },
  separator: {
    marginTop: 10,
    marginBottom: 10,
    zIndex: 10,
    height: 5,
    width: "80%",
    backgroundColor: "dark",
    "@media (max-width: 380)": {
      marginTop: 5,
      marginBottom: 5,
    },
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: colors.white,
  },

  container_image: {
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    "@media (max-width: 380)": {
      marginTop: -15,
    },
  },

  container_text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "transparent",
  },
});

export default styles;
