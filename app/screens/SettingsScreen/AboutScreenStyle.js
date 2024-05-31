import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  blockParameter: {
    flexDirection: "row",
    marginVertical: 5,
    paddingVertical: 17,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  text: {
    fontSize: 15,
    "@media (max-height: 600)": {
      fontSize: 12,
    },
  },
});

export default styles;
