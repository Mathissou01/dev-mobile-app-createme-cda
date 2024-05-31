import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 25,
    letterSpacing: 1,
  },
  dropDown: {
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  inputField: {
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 14,
    "@media (max-height: 600)": {
      fontSize: 12,
    },
  },
  iconContainer: {
    position: "absolute",
    zIndex: 1,
  },
  icon: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -11 }],
    right: 15,
    paddingLeft: 12,
    borderLeftWidth: 1,
  },
  iconSearch: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -11 }],
    left: 15,
  },
  validIcon: {
    top: "50%",
    transform: [{ translateY: -11 }],
  },
  containerLabel: {
    backgroundColor: "transparent",
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    marginRight: 5,
    "@media (max-height: 670)": {
      fontSize: 12,
    },
    "@media (max-height: 600)": {
      fontSize: 10,
    },
  },
  requiredAsterisk: {
    fontSize: 18,
    "@media (max-width: 380)": {
      fontSize: 10,
    },
  },
  line: {
    marginTop: 2,
    height: 1.5,
  },
});

export default styles;
