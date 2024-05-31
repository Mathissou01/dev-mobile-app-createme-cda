import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  containerDateBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 13,
    gap: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: "black",
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default styles;
