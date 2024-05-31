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
    paddingHorizontal: 20,
    gap: 10,
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: "black",
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default styles;
