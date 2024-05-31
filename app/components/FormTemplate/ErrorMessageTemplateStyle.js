import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  mainContainer: {},
  lengthContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  regexContainer: {
    display: "flex",
    justifyContent: "flex-start"
  },
  textError: {
    color: "red",
    fontSize: 14,
    "@media (max-height: 670)": {
      fontSize: 12
    },
    "@media (max-height: 600)": {
      fontSize: 10
    }
  }
});

export default styles;
